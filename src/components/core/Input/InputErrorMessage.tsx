import React from "react";

import { WarningIcon } from "@/icons";

interface InputErrorMessageProps {
  error: string | undefined;
}

export const InputErrorMessage = ({ error }: InputErrorMessageProps) => {
  return error ? (
    <div className="flex items-center gap-1 px-[1px] text-error">
      <WarningIcon className="h-[16px] w-[16px]" />
      <span>{error}</span>
    </div>
  ) : null;
};
