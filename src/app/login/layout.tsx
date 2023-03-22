import type { ReactNode } from "react";

import { authOptions } from "@/api/auth/[...nextauth]";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const description = "Login";

export const metadata: Metadata = {
  title: "Login",
  description,
  openGraph: {
    title: "Sign up",
    description
  },
  twitter: {
    title: "Sign up",
    description
  }
};

export default async function LoginLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return children;
}
