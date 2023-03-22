import { me, signIn } from "@/graphql/api";
import type { SignInInput } from "@/graphql/graphql";
import { prisma } from "@/prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AUTH_SECRET = process.env.AUTH_SECRET;

export const authOptions: NextAuthOptions = {
  secret: AUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        emailOrUsername: { type: "text" },
        password: { type: "text" }
      },
      async authorize(credentials?: SignInInput) {
        if (!credentials) return null;

        const { emailOrUsername, password } = credentials;

        const user = await signIn({ input: { emailOrUsername, password } }).then(res => res.signIn);

        if (!user) return null;

        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const { user } = session;

        session.user.id = token.id as string;

        const dbUser = await me({ email: user.email }).then(res => res.me);

        if (dbUser) {
          const userEntries = Object.entries(dbUser);

          userEntries.forEach(([key, value]) => {
            (user as any)[key] = value;
          });
        }
      }

      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  }
};

export default NextAuth(authOptions);
