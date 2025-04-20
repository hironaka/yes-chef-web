import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient, User } from "@prisma/client"; // Import User type

const prisma = new PrismaClient();

// Basic password validation: min 8 chars, at least one number
const isValidPassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  return true;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body; // Assuming name might also be sent from signup form

    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    // Validate email format (simple check)
    if (!/\S+@\S+\.\S+/.test(email)) {
       return new NextResponse("Invalid email format", { status: 400 });
    }

    // Validate password complexity
    if (!isValidPassword(password)) {
      return new NextResponse(
        "Password must be at least 8 characters long and contain at least one number",
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse("Email already in use", { status: 409 }); // 409 Conflict
    }

    const hashedPassword = await bcrypt.hash(password, 12); // Salt rounds = 12

    const user: User = await prisma.user.create({ // Explicitly type user
      data: {
        email,
        name, // Include name if provided
        password: hashedPassword,
      },
    });

    // Don't return the password hash
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 201 }); // 201 Created
  } catch (error: any) {
    console.error("REGISTRATION ERROR:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}