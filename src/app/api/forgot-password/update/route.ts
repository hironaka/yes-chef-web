import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10; // Use the same salt rounds as in your registration logic

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    if (!password || typeof password !== 'string') {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }
    // Basic password length check (adjust as needed)
    if (password.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    const lowerCaseEmail = email.toLowerCase();

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Update the user's password
    const updatedUser = await prisma.user.update({
      where: { email: lowerCaseEmail },
      data: { password: hashedPassword },
    });

    if (!updatedUser) {
        // This case should be rare if email verification happened correctly
        console.error(`Failed to update password for user that should exist: ${lowerCaseEmail}`);
        return NextResponse.json({ error: 'Failed to update password. User not found.' }, { status: 404 });
    }

    // Password updated successfully, now delete the verification token(s) for this user
    // It's important to delete the token AFTER the password update is successful.
    // We delete all tokens for the identifier to clean up any potentially expired but not yet deleted tokens.
    try {
        const { count } = await prisma.verificationToken.deleteMany({
            where: { identifier: lowerCaseEmail },
        });
        console.log(`Deleted ${count} verification token(s) for ${lowerCaseEmail} after password update.`);
    } catch (deleteError) {
        // Log the error but don't fail the request, as the password update was successful
        console.error(`Error deleting verification token(s) for ${lowerCaseEmail} after password update:`, deleteError);
    }


    console.log(`Password updated successfully for user: ${lowerCaseEmail}`);
    return NextResponse.json({ message: 'Password updated successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Error updating password:', error);
    // Handle potential Prisma errors, e.g., user not found during update
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
         return NextResponse.json({ error: 'Failed to update password. User not found.' }, { status: 404 });
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}