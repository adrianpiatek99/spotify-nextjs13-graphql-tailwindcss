import type { ReactNode } from "react";

import type { Metadata } from "next";

const description = "Sign up";

export const metadata: Metadata = {
  title: "Sign up",
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

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return children;
}
