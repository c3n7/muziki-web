import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const API_URL: string = process.env.API_BASE_URL ?? "";

export class CredentialsError extends CredentialsSignin {
  message: string;
  code = "credentials_error";

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
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
            const data = await response.json();

            if (response.ok) {
              return data;
            }

            if (data) {
              throw new CredentialsError(data.message);
            }

            throw new CredentialsError("Could not log in.");
          })
          .then((data) => data)
          .catch((e) => {
            if (e instanceof CredentialsError) {
              throw e;
            }
            throw new CredentialsError("Something went wrong.");
          });

        return response;
      },
    }),
  ],
});
