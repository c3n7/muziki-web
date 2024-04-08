import { Link } from "@/components/link";
import { SignInForm } from "./components/sign-in-form";

export default function Page() {
  return (
    <>
      <h1 className="text-lg font-light text-center tracking-wider">
        Sign In to Your Account
      </h1>

      <SignInForm />

      <div className="flex justify-center mt-2">
        <Link href="/auth/forgot-password">Forgot Password</Link>
      </div>
    </>
  );
}
