import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const lowerCaseEmail = email.toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email: lowerCaseEmail },
    });

    // Return a generic success message even if user not found or is OAuth user
    // This prevents email enumeration attacks.
    if (!user || !user.password) {
      console.log(`Password reset requested for non-existent or OAuth user: ${lowerCaseEmail}`);
      return NextResponse.json({ message: 'If an account exists for this email, a password reset link has been sent.' }, { status: 200 });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // Set token expiry (e.g., 1 hour)
    const expires = new Date(Date.now() + 3600 * 1000); // 1 hour from now

    // Store hashed token in database
    await prisma.verificationToken.create({
      data: {
        identifier: lowerCaseEmail, // Use email as identifier
        token: hashedToken,
        expires,
      },
    });

    // --- Send Email ---
    const {
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_USE_TLS,
      EMAIL_USERNAME,
      EMAIL_PASSWORD,
      NEXTAUTH_URL, // Needed for the reset link
    } = process.env;

    if (
      !EMAIL_SERVER_HOST ||
      !EMAIL_SERVER_PORT ||
      !EMAIL_USE_TLS ||
      !EMAIL_USERNAME ||
      !EMAIL_PASSWORD ||
      !NEXTAUTH_URL
    ) {
      console.error('Missing email or NEXTAUTH_URL configuration environment variables for password reset');
      // Don't expose server config error to client, but log it
      // Still return the generic success message
      return NextResponse.json({ message: 'If an account exists for this email, a password reset link has been sent.' }, { status: 200 });
    }

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

    const resetLink = `${NEXTAUTH_URL}/reset-password?token=${resetToken}`;

    const mailOptions = {
      from: EMAIL_USERNAME,
      to: lowerCaseEmail,
      subject: 'Reset Your Password',
      text: `Hello,\n\nPlease click the following link to reset your password:\n${resetLink}\n\nIf you did not request this, please ignore this email.\nThis link will expire in 1 hour.\n`,
      html: `<p>Hello,</p><p>Please click the following link to reset your password:</p><p><a href="${resetLink}">${resetLink}</a></p><p>If you did not request this, please ignore this email.</p><p>This link will expire in 1 hour.</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Password reset email sent successfully to ${lowerCaseEmail}`);
    } catch (emailError) {
        console.error(`Failed to send password reset email to ${lowerCaseEmail}:`, emailError);
        // Don't expose email sending failure, return generic success
        return NextResponse.json({ message: 'If an account exists for this email, a password reset link has been sent.' }, { status: 200 });
    }

    return NextResponse.json({ message: 'If an account exists for this email, a password reset link has been sent.' }, { status: 200 });

  } catch (error) {
    console.error('Error in password reset request:', error);
    // Generic error for the client
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}