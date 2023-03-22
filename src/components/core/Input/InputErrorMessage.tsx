import React from "react";

import { WarningIcon } from "@/icons";

interface InputErrorMessageProps {
  error: string | undefined;
}

export const InputErrorMessage = ({ error }: InputErrorMessageProps) => {
  return error ? (
    <div className="grid grid-cols-[auto_1fr] gap-2 px-[1px] text-error">
      <WarningIcon className="mt-[1px] h-[16px] w-[16px]" />
      <span>{error}</span>
    </div>
  ) : null;
};
