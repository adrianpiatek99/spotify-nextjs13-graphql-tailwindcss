"use client";
import { AuthLogInForm, AuthTemplate } from "@/components/auth-page";
import { Button } from "@/components/core";
import Link from "next/link";

export default function Login() {
  return (
    <AuthTemplate>
      <AuthLogInForm />
      <hr className="my-[12px] border-gray" />
      <div className="flex flex-col">
        <span className="pb-[24px] text-center text-l font-bold">Don&apos;t have an account?</span>
        <Link href="/signup" tabIndex={-1}>
          <Button fullWidth variant="outlined">
            Sign up for spotify
          </Button>
        </Link>
      </div>
    </AuthTemplate>
  );
}
