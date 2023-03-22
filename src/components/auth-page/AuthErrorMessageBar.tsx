import React from "react";

import { WarningIcon } from "@/icons";

interface AuthErrorMessageBarProps {
  error: string;
}

export const AuthErrorMessageBar = ({ error }: AuthErrorMessageBarProps) => {
  return (
    <div className="flex items-start gap-2 rounded border-[1px] border-error bg-error/15 p-2.5">
      <WarningIcon className="mt-[1px] h-[16px] w-[16px] text-error" />
      <span>{error}</span>
    </div>
  );
};
