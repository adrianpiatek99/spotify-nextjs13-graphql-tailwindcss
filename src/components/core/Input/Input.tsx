import type { ComponentPropsWithRef, FC, Ref } from "react";
import React, { forwardRef, useState } from "react";

import { EyeIcon, EyeInvisibleIcon, WarningIcon } from "@/icons";
import { twMerge } from "tailwind-merge";

import { IconButton } from "../IconButton";
import type { InputType } from "./Input.type";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "type" | "size"> {
  name: string;
  label: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  type?: InputType;
  error?: string;
}

const inputClasses = {
  hover: "enabled:hover:shadow-[inset_0px_0px_0px_1px_theme('colors.gray.200')]",
  focus: "enabled:focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.gray.200')]",
  error:
    "shadow-[inset_0px_0px_0px_1px_theme('colors.error')] enabled:hover:shadow-[inset_0px_0px_0px_1px_theme('colors.error')] enabled:focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.error')]",
  disabled: "disabled:opacity-50",
  placeholder: "placeholder:text-gray-200"
};

export const Input: FC<InputProps> = forwardRef(
  (
    {
      name,
      label,
      value,
      error,
      type = "text",
      onValueChange = () => null,
      maxLength = 255,
      className = "",
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPasswordType = type === "password";
    const inputType = isPasswordVisible ? "text" : type;

    return (
      <div className="flex min-w-[50px] flex-col gap-2">
        <label className="font-semibold" htmlFor={label}>
          {label}
        </label>
        <div className="relative flex w-full">
          <input
            className={twMerge(
              `bg-background2 w-full px-[14px] py-[15.5px] placeholder:text-gray-200 outline-none rounded shadow-[inset_0px_0px_0px_1px_theme('colors.gray.DEFAULT')] duration-200 ${
                inputClasses.disabled
              } ${inputClasses.hover} ${inputClasses.focus} ${inputClasses.placeholder} ${
                error && inputClasses.error
              } ${className}`
            )}
            id={label}
            type={inputType}
            name={name}
            aria-label={label}
            value={value}
            onChange={e => onValueChange(e.target.value)}
            autoComplete="off"
            maxLength={maxLength}
            placeholder={label}
            {...props}
            ref={ref}
          />
          {isPasswordType && (
            <div className="absolute right-[10px] top-[50%] flex -translate-y-2/4 gap-[4px]">
              <IconButton
                title={isPasswordVisible ? "Hide password" : "Show password"}
                onClick={() => setIsPasswordVisible(prev => !prev)}
              >
                {isPasswordVisible ? <EyeInvisibleIcon /> : <EyeIcon />}
              </IconButton>
            </div>
          )}
        </div>
        {error && (
          <div className="flex items-center gap-1 px-[1px] text-error">
            <WarningIcon className="h-[16px] w-[16px]" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
