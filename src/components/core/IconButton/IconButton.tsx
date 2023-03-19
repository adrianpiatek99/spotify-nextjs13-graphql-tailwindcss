import type { ComponentPropsWithRef, FC, Ref } from "react";
import { forwardRef } from "react";
import React from "react";

import { twMerge } from "tailwind-merge";

interface IconButtonProps extends Omit<ComponentPropsWithRef<"button">, "color"> {
  title?: string;
  disableFocus?: boolean;
}

const classes = {
  hover: "enabled:hover:bg-foreground/10",
  active: "enabled:active:bg-foreground/15",
  focus: "focus-visible:bg-foreground/5 focus-visible:shadow-focus",
  disabled: "disabled:bg-foreground/15 disabled:opacity-50 disabled:cursor-not-allowed",
  icon: "[&>svg]:w-[20px] [&>svg]:h-[20px]"
};

export const IconButton: FC<IconButtonProps> = forwardRef(
  ({ title = "", disableFocus = false, className = "", ...props }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        className={twMerge(
          `flex items-center justify-center w-[30px] h-[30px] rounded duration-200 ${classes.hover} ${classes.active} ${classes.focus} ${classes.disabled} ${classes.icon} ${className}`
        )}
        title={title}
        aria-label={title}
        type="button"
        tabIndex={disableFocus ? -1 : 0}
        {...props}
        ref={ref}
      />
    );
  }
);
