import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { firebaseAdmin } from '@/lib/firebase-admin';

const prisma = new PrismaClient();

const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

export async function POST(req: NextRequest) {
  console.log('Received Facebook Data Deletion Request');

  if (!FACEBOOK_APP_SECRET) {
    console.error('FACEBOOK_APP_SECRET environment variable not set.');
    return NextResponse.json({ error: 'Internal server configuration error.' }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    const signedRequest = formData.get('signed_request') as string | null;

    if (!signedRequest) {
      console.warn('Missing signed_request in Facebook callback.');
      return NextResponse.json({ error: 'Missing signed_request' }, { status: 400 });
    }

    console.log('Received signed_request'); // Avoid logging the actual request for security

    // 1. Parse and Verify Signed Request
    const payload = parseAndVerifySignedRequest(signedRequest, FACEBOOK_APP_SECRET);

    if (!payload) {
      console.warn('Invalid signed_request received.');
      return NextResponse.json({ error: 'Invalid signed_request' }, { status: 400 });
    }

    // 2. Extract User ID (ASID)
    const userId = payload.user_id;
    if (!userId) {
        console.warn('No user_id found in signed_request payload.');
        return NextResponse.json({ error: 'Invalid payload: Missing user_id' }, { status: 400 });
    }
    console.log(`Processing deletion request for Facebook User ID (ASID): ${userId}`);

    // 3. Generate Confirmation Code & Status URL
    const confirmationCode = crypto.randomBytes(16).toString('hex');
    // Construct the URL based on your frontend routing structure
    // Ensure NEXT_PUBLIC_BASE_URL is set in your environment variables
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const statusUrl = `${baseUrl}/user/deletion-status?code=${confirmationCode}`;

    // 4. Create Initial Deletion Record in DB (status: 'pending')
    try {
        await prisma.dataDeletionRequest.create({
            data: {
                confirmationCode: confirmationCode,
                facebookUserId: userId, // Store the ASID
                status: 'pending',
            },
        });
        console.log(`Created pending deletion record for code: ${confirmationCode}`);
    } catch (dbError) {
        console.error('Failed to create initial deletion record:', dbError);
        // Even if DB write fails, we should try to acknowledge Facebook if possible,
        // but log the critical error. The async deletion won't proceed.
        // Consider if a different response is needed here. For now, we proceed.
    }

    // 5. Return Immediate Response to Facebook
    const responsePayload = {
        url: statusUrl,
        confirmation_code: confirmationCode,
    };
    console.log('Sending response to Facebook:', responsePayload);
    const response = NextResponse.json(responsePayload, { status: 200 });


    // --- Asynchronous Processing Starts After Response ---
    // Use setTimeout or a queue system to handle the deletion after responding
    setTimeout(async () => {
        console.log(`Starting async deletion process for code: ${confirmationCode}`);
        try {
            // 6. Perform Deletion Asynchronously
            // Try to delete from Firebase Auth
            try {
                const firebaseUser = await firebaseAdmin.auth().getUserByProviderUid('facebook.com', userId);
                await firebaseAdmin.auth().deleteUser(firebaseUser.uid);
                console.log(`Successfully deleted Firebase user: ${firebaseUser.uid}`);
            } catch (firebaseError: any) {
                if (firebaseError.code === 'auth/user-not-found') {
                    console.log(`Firebase user not found for Facebook ASID: ${userId}`);
                } else {
                    console.error(`Failed to delete Firebase user for Facebook ASID ${userId}:`, firebaseError);
                    // We might want to mark as failed if Firebase deletion fails, but let's continue to check Prisma
                }
            }

            // Try to delete from Prisma (if exists)
            const account = await prisma.account.findUnique({
                where: {
                    provider_providerAccountId: {
                        provider: 'facebook',
                        providerAccountId: userId,
                    },
                },
            });

            if (!account) {
                console.log(`No Prisma account found for Facebook ASID: ${userId}.`);
                await prisma.dataDeletionRequest.update({
                    where: { confirmationCode: confirmationCode },
                    data: { status: 'not_found' },
                });
            } else {
                console.log(`Prisma Account found for user ID: ${account.userId}. Attempting user deletion.`);
                try {
                    await prisma.user.delete({
                        where: { id: account.userId },
                    });
                    console.log(`Successfully deleted Prisma user: ${account.userId}. Updating status to success.`);
                    await prisma.dataDeletionRequest.update({
                        where: { confirmationCode: confirmationCode },
                        data: { status: 'success' },
                    });
                } catch (deletionError: any) {
                    console.error(`Failed to delete Prisma user ${account.userId}:`, deletionError);
                    await prisma.dataDeletionRequest.update({
                        where: { confirmationCode: confirmationCode },
                        data: {
                            status: 'failed',
                            message: deletionError instanceof Error ? deletionError.message : String(deletionError),
                        },
                    });

                    // 7. Send Email on Failure
                    console.log('Deletion failed, attempting to send notification email.');
                    await sendFailureEmail(confirmationCode, userId, deletionError instanceof Error ? deletionError.message : String(deletionError));
                }
            }
        } catch (asyncError) {
            console.error(`Error during async deletion process for code ${confirmationCode}:`, asyncError);
            // Attempt to mark as failed if possible, otherwise the status remains 'pending'
            try {
                await prisma.dataDeletionRequest.update({
                    where: { confirmationCode: confirmationCode },
                    data: {
                        status: 'failed',
                        message: `Async processing error: ${asyncError instanceof Error ? asyncError.message : String(asyncError)}`,
                     },
                });
            } catch (updateError) {
                 console.error(`Failed to even update status to failed for code ${confirmationCode}:`, updateError);
            }
        } finally {
            // Disconnect Prisma client used in the async task if necessary,
            // though typically the main handler's finally block covers this.
            // await prisma.$disconnect(); // Be cautious with disconnecting if the main request is still running
        }
    }, 0); // Execute immediately after the current event loop cycle

    return response; // Return the response to Facebook

  } catch (error) {
    console.error('Error processing Facebook data deletion callback:', error);
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Parses and verifies the signed request from Facebook.
 * @param signedRequest The raw signed_request string.
 * @param secret The Facebook App Secret.
 * @returns The decoded payload object containing user_id if valid, otherwise null.
 */
function parseAndVerifySignedRequest(signedRequest: string, secret: string): { user_id: string; [key: string]: any } | null {
  try {
    const [encodedSig, payload] = signedRequest.split('.', 2);

    if (!encodedSig || !payload) {
      console.error('Invalid signed_request format.');
      return null;
    }

    // Decode the data
    const sig = base64UrlDecode(encodedSig);
    const data = JSON.parse(base64UrlDecode(payload).toString('utf-8'));

    // Check algorithm
    if (!data.algorithm || data.algorithm.toUpperCase() !== 'HMAC-SHA256') {
      console.error(`Unknown algorithm received: ${data.algorithm}. Expected HMAC-SHA256.`);
      return null;
    }

    // Verify signature
    const expectedSig = crypto
      .createHmac('sha256', secret)
      .update(payload) // Use the raw payload string for HMAC calculation
      .digest();

    if (!sig.equals(expectedSig)) {
       console.error('Bad signed JSON signature!');
       return null;
    }

    // Optional: Check expiry if needed (data.expires)
    // const now = Math.floor(Date.now() / 1000);
    // if (data.expires && data.expires < now) {
    //   console.warn('Signed request has expired.');
    //   return null;
    // }

    // Optional: Check issued_at if needed (data.issued_at)

    if (!data.user_id) {
        console.error('No user_id found in signed_request payload.');
        return null;
    }

    return data; // Contains user_id and potentially other fields
  } catch (error) {
    console.error('Error parsing or verifying signed request:', error);
    return null;
  }
}

/**
 * Decodes a base64 URL encoded string.
 * @param input The base64 URL encoded string.
 * @returns A Buffer containing the decoded data.
 */
function base64UrlDecode(input: string): Buffer {
  input = input.replace(/-/g, '+').replace(/_/g, '/');
  const pad = input.length % 4;
  if (pad) {
    input += new Array(5 - pad).join('=');
  }
  return Buffer.from(input, 'base64');
}

/**
 * Sends a notification email when a Facebook data deletion request fails.
 * Uses nodemailer and configuration from environment variables.
 */
async function sendFailureEmail(confirmationCode: string, facebookUserId: string, errorDetails: string) {
    const {
        EMAIL_SERVER_HOST,
        EMAIL_SERVER_PORT,
        EMAIL_USE_TLS,
        EMAIL_USERNAME,
        EMAIL_PASSWORD,
    } = process.env;

    // Validate environment variables
    if (
        !EMAIL_SERVER_HOST ||
        !EMAIL_SERVER_PORT ||
        !EMAIL_USE_TLS ||
        !EMAIL_USERNAME ||
        !EMAIL_PASSWORD
    ) {
        console.error('Missing email configuration environment variables for failure notification.');
        // Don't throw an error here, just log it, as the main deletion process might have succeeded/failed already.
        return;
    }

    try {
        const port = parseInt(EMAIL_SERVER_PORT, 10);
        const secure = EMAIL_USE_TLS === 'true';

        const transporter = nodemailer.createTransport({
            host: EMAIL_SERVER_HOST,
            port: port,
            secure: secure,
            auth: {
                user: EMAIL_USERNAME,
                pass: EMAIL_PASSWORD,
            },
        });

        const recipient = 'hi.yes.chef@gmail.com'; // Target email address
        const subject = `[Action Required] Facebook Data Deletion Failed - Code: ${confirmationCode}`;
        const textBody = `
            A Facebook data deletion request failed. Manual intervention might be required.

            Confirmation Code: ${confirmationCode}
            Facebook User ID (ASID): ${facebookUserId}
            Error Details: ${errorDetails}

            Timestamp: ${new Date().toISOString()}
        `;

        const mailOptions = {
            from: EMAIL_USERNAME, // Sender address (must be your authenticated user)
            to: recipient,
            subject: subject,
            text: textBody,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Failure notification email sent successfully for code: ${confirmationCode}`);

    } catch (emailError) {
        console.error(`Failed to send failure notification email for code ${confirmationCode}:`, emailError);
    }
}