import React from "react";

import { Button } from "@/components/core";
import { AppleIcon, FacebookIcon, GoogleIcon } from "@/icons";

export const AuthProviders = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-center font-bold">To continue, log in to Spotify.</p>
      <Button
        className="bg-[#1877f2] enabled:hover:bg-[#1877f2]/75 enabled:active:bg-[#1877f2]/60"
        fullWidth
        variant="outlined"
        startIcon={<FacebookIcon />}
      >
        Continue with Facebook
      </Button>
      <Button
        className="bg-[#000000] enabled:hover:bg-[#000000]/40 enabled:active:bg-[#000000]/20  [&>svg]:mt-[-3px]"
        fullWidth
        variant="outlined"
        startIcon={<AppleIcon />}
      >
        Continue with Apple
      </Button>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
        Continue with Google
      </Button>
    </div>
  );
};
