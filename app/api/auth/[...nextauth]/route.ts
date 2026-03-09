import NextAuth from "next-auth";
import type { AuthOptions, JWT, Account, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { verifyPassword, findUserByEmail, createUser } from "../../../../lib/users";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await verifyPassword(credentials.email, credentials.password);
        if (user) {
          // omit passwordHash in session
          return { id: user.id, name: user.name, email: user.email, role: user.role };
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id;
        if ((user as any).role) {
          token.role = (user as any).role;
        }
      }
      // after Google sign-in, make sure we have a local record and role
      if (account?.provider === 'google' && user?.email) {
        let local = await findUserByEmail(user.email);
        if (!local) {
          // create a dummy password since Google accounts don't use it
          local = await createUser(user.name || '', user.email, crypto.randomUUID(), 'student');
        }
        token.role = local.role;
      }
      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.id as string;
        if (token.role) {
          session.user.role = token.role as string;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // redirect to custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// NextAuth requires a default export
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
