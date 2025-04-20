import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Add other providers here if needed in the future
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