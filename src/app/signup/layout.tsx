import type { ReactNode } from "react";

const description = "Sign up";

export const metadata = {
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
