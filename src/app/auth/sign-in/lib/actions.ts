"use server";
import { CredentialsError, signIn } from "@/auth";
import { SignInFormValues } from "./types";

interface AuthenticateResponse {
  message: string;
  success: boolean;
}

export async function authenticate(credentials: SignInFormValues) {
  try {
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
  } catch (e) {
    const errorResponse = (message: string) =>
      ({
        message,
        success: false,
      } satisfies AuthenticateResponse);

    if (e instanceof CredentialsError) {
      return errorResponse(e.message);
    }

    return errorResponse("Something went wrong.");
  }

  return {
    message: "Logged in successfully",
    success: true,
  } satisfies AuthenticateResponse;
}
