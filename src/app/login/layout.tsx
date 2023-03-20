import type { ReactNode } from "react";

import type { Metadata } from "next";

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

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
