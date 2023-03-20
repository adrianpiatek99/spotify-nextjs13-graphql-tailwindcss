import type { ComponentPropsWithRef, FC, ReactNode, Ref } from "react";
import { forwardRef } from "react";
import React from "react";

import { twMerge } from "tailwind-merge";

import { Loader } from "../Loader";
import type { ButtonVariant } from "./Button.type";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
}

const classes = {
  variant: {
    contained:
      "bg-primary enabled:hover:bg-opacity-75 focus-visible:shadow-focus enabled:active:bg-opacity-60",
    outlined:
      "bg-foreground/5 border-[1px] border-gray enabled:hover:bg-foreground/10 enabled:active:bg-foreground/15 focus-visible:shadow-focus"
  },
  disabled: "disabled:cursor-not-allowed disabled:opacity-50",
  loading: "disabled:opacity-80 bg-opacity-60",
  fullWidth: "w-full",
  icon: "[&>svg]:w-[22px] [&>svg]:h-[22px]"
};

export const Button: FC<ButtonProps> = forwardRef(
  (
    {
      children,
      disabled,
      startIcon,
      variant = "contained",
      fullWidth = false,
      loading = false,
      className = "",
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={twMerge(
          `relative flex justify-center items-center gap-2.5 uppercase text-s h-[45px] px-[32px] font-semibold rounded-3xl select-none duration-200 ${
            classes.variant[variant]
          } ${fullWidth && classes.fullWidth} ${classes.disabled} ${loading && classes.loading} ${
            classes.icon
          } ${className}`
        )}
        disabled={loading || disabled}
        ref={ref}
        {...props}
      >
        {startIcon && !loading && startIcon}
        {loading && (
          <div className="absolute top-2/4 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <Loader />
          </div>
        )}
        <span className={`${loading && "invisible"}`}>{children}</span>
      </button>
    );
  }
);
