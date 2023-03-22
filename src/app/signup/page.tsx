"use client";
import { AuthSignUpForm, AuthTemplate } from "@/components/auth-page";
import Link from "next/link";

export default function SignUp() {
  return (
    <AuthTemplate>
      <AuthSignUpForm />
      <p className="text-center text-m">
        Have an account?{" "}
        <Link className="link--highlighted" href="/login">
          Log in
        </Link>
        .
      </p>
    </AuthTemplate>
  );
}
