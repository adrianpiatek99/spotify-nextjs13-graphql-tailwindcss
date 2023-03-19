import type { FC } from "react";
import React from "react";

import { twMerge } from "tailwind-merge";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = "" }) => {
  return (
    <span
      className={twMerge(
        `spinner after:content-[''] after:absolute after:top-[calc(50%-13px)] after:left-[calc(50%-13px)] after:w-[26px] after:h-[26px] after:rounded-[50%] after:border-t-[3px] after:border-l-[3px] after:border-r-[3px] after:border-t-foreground after:border-l-foreground after:border-r-foreground/10 after:animate-animation-spinner ${className}`
      )}
    />
  );
};
