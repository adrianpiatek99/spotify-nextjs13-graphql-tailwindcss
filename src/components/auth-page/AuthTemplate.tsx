import type { ReactNode } from "react";
import React from "react";

import { AuthHeader } from "./AuthHeader";
import { AuthProviders } from "./AuthProviders";

export const AuthTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AuthHeader />
      <div className="mx-auto flex w-full max-w-[450px] flex-col gap-2.5 p-3.5 pb-[90px]">
        <AuthProviders />
        <div className="flex items-center font-bold uppercase">
          <hr className="my-[12px] flex-1 border-gray" />
          <span className="flex-[0.3_1_0%] text-center">or</span>
          <hr className="my-[12px] flex-1 border-gray" />
        </div>
        {children}
      </div>
    </div>
  );
};
