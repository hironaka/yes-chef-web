import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"; // Import CredentialsProvider
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client"; // Import User type
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({ // Add FacebookProvider configuration
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<any> { // Add explicit type for credentials if possible, or Promise<any> for now
        // Type assertion or validation needed if using Promise<any>
        const creds = credentials as { email?: string; password?: string };

        if (!creds?.email || !creds?.password) {
          throw new Error("Missing email or password");
        }

        // Define a type matching the selected fields
        type UserWithPassword = {
          id: string;
          email: string | null;
          name: string | null;
          image: string | null;
          password: string | null; // Password is included here
        } | null;

        const user: UserWithPassword = await prisma.user.findUnique({
          where: { email: creds.email },
          select: {
            id: true,
            email: true,
            name: true,
            image: true,
            password: true,
          }
        });

        // If no user found, or user has no password (likely OAuth user), fail auth
        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isValidPassword = await bcrypt.compare(
          creds.password,
          user.password // Assuming prisma generate updated the type
        );

        if (!isValidPassword) {
          throw new Error("Invalid email or password");
        }

        // Return user object without password
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    })
  ],
  // Use JWT strategy for sessions (recommended)
  session: {
    strategy: "jwt",
  },
  // Add custom pages if needed
  // pages: {
  //   signIn: '/auth/signin',
  // },
  // Add callbacks if needed
  // callbacks: {
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.accessToken = token.accessToken
  //     session.user.id = token.id
  //
  //     return session
  //   }
  // }
  secret: process.env.NEXTAUTH_SECRET, // Secret used to sign tokens/cookies
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };