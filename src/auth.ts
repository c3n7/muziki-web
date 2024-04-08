import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const API_URL: string = process.env.API_BASE_URL ?? "";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials);
        const body = JSON.stringify(credentials);

        const response = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body,
        })
          .then(async (response) => {
            console.log(response.status);
            const data = await response.json();

            if (response.ok) {
              return data;
            }

            if (data) {
              throw data;
            }

            throw new Error("Could not log you in");
          })
          .then((data) => data)
          .catch(() => {
            return null;
          });

        return response;
      },
    }),
  ],
});
