import { useState } from "react";

import type { SignInInput } from "@/graphql/graphql";
import { signIn as nextSignIn } from "next-auth/react";

interface UseSignInProps {
  onSuccess?: () => void;
}

export const useSignIn = ({ onSuccess }: UseSignInProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const signIn = async ({ emailOrUsername, password }: SignInInput) => {
    try {
      setIsLoading(true);
      setError("");

      const response = await nextSignIn("credentials", {
        emailOrUsername,
        password,
        redirect: false
      });

      const ok = response?.ok;

      if (!ok) throw Error(response?.error);

      onSuccess?.();
    } catch (error) {
      const err = error as any;
      const errorMessage = err?.message;

      setError(errorMessage.slice(0, errorMessage.indexOf(":")));
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, isLoading, error };
};
