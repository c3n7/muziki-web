"use server";
import { signIn } from "@/auth";
import { SignInFormValues } from "./types";
import { AuthError } from "next-auth";

export async function authenticate(credentials: SignInFormValues) {
  try {
    await signIn("credentials", credentials);
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return "Invalid Credentials";
        default:
          return "Something went wrong";
      }
    }

    throw e;
  }
}
