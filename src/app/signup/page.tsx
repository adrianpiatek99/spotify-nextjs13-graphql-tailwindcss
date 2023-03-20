"use client";
import { AuthHeader, AuthProviders, AuthSignUpForm } from "@/components/auth-page";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col">
      <AuthHeader />
      <div className="mx-auto flex w-full max-w-[450px] flex-col gap-2.5 p-3.5 pb-[90px]">
        <AuthProviders />
        <div className="flex items-center font-bold uppercase">
          <hr className="my-[12px] flex-1 border-gray" />
          <span className="flex-[0.3_1_0%] text-center">or</span>
          <hr className="my-[12px] flex-1 border-gray" />
        </div>
        <AuthSignUpForm />
        <p className="text-center text-m">
          Have an account?{" "}
          <Link className="link--highlighted" href="/login">
            Log in
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
