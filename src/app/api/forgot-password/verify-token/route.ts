import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token || typeof token !== 'string') {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }

    // Hash the received token to compare with the stored hash
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find the token in the database
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token: hashedToken },
    });

    if (!verificationToken) {
      console.log(`Verification attempt with invalid token hash: ${hashedToken}`);
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }

    // Check if the token has expired
    const hasExpired = new Date() > new Date(verificationToken.expires);

    if (hasExpired) {
      console.log(`Verification attempt with expired token for identifier: ${verificationToken.identifier}`);
      // Optionally delete the expired token
      await prisma.verificationToken.delete({
        where: { token: hashedToken },
      });
      return NextResponse.json({ error: 'Token has expired' }, { status: 400 });
    }

    // Token is valid and not expired
    console.log(`Token verified successfully for identifier: ${verificationToken.identifier}`);
    return NextResponse.json({ email: verificationToken.identifier }, { status: 200 });

  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}