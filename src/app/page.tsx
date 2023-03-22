"use client";

import { Button } from "@/components/core";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {
  const { user, loading } = useAppSelector(state => state.me);

  const logOut = () => {
    signOut({
      callbackUrl: "/login"
    });
  };

  return (
    <main className="grid min-h-screen place-items-center p-3.5">
      <div className="flex flex-col gap-4">
        {loading ? (
          <span>Loading...</span>
        ) : user ? (
          <>
            <div className="flex flex-col gap-1">
              <span>Username: {user.username}</span>
              <span>Email: {user.email}</span>
            </div>
            <Button onClick={logOut}>Log out</Button>
          </>
        ) : (
          <Link className="link--highlighted" href="/login">
            Log in
          </Link>
        )}
      </div>
    </main>
  );
}
