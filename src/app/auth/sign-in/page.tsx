import Button from "@/components/action/button";
import { TextInput } from "@/components/input";
import { Link } from "@/components/link";

export default function Page() {
  return (
    <>
      <h1 className="text-lg font-light text-center tracking-wider">
        Sign In to Your Account
      </h1>

      <form className="w-full flex flex-col space-y-1">
        <TextInput label="Email" type="email" />
        <TextInput label="Password" type="password" />

        <div className="pt-2 w-full">
          <Button text="Log In" type="submit" fillWidth />
        </div>
      </form>

      <div className="flex justify-center mt-2">
        <Link href="/auth/forgot-password">Forgot Password</Link>
      </div>
    </>
  );
}
