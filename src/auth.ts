import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET || "node-ev",
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(process.env.AUTH_SECRET);
        console.log(credentials);
        return null;
      },
    }),
  ],
});
