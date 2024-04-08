"use server";
import { signIn } from "@/auth";
import { SignInFormValues } from "./types";

export async function authenticate(credentials: SignInFormValues) {
  await signIn("credentials", credentials);
}
