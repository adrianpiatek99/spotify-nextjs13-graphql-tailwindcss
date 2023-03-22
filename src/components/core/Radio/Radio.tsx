import type { ComponentPropsWithRef, FC, Ref } from "react";
import { forwardRef } from "react";
import React from "react";

import { twMerge } from "tailwind-merge";

export interface RadioProps extends Omit<ComponentPropsWithRef<"input">, "type" | "size"> {
  value: string;
  checked: boolean;
  name: string;
  label: string;
  onValueChange?: (value: string) => void;
  isError?: boolean;
}

const inputClasses = {
  hover: "enabled:hover:border-primary enabled:checked:hover:border-primary/75",
  checked: "checked:border-[3px] checked:border-primary",
  error: "border-error"
};

export const Radio: FC<RadioProps> = forwardRef(
  (
    {
      value,
      name,
      label,
      checked,
      onValueChange = () => null,
      isError = false,
      disabled = false,
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={twMerge(`flex min-h-[19px] items-center ${disabled && "opacity-50"}`)}>
        <input
          className={twMerge(
            `relative h-[16px] w-[16px] appearance-none rounded-full bg-background2 border-[1px] border-gray outline-none duration-150 focus-visible:shadow-focus cursor-pointer disabled:cursor-not-allowed ${
              isError && inputClasses.error
            } ${inputClasses.hover} ${inputClasses.checked}`
          )}
          type="radio"
          id={value}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={e => onValueChange(e.target.value)}
          {...props}
          ref={ref}
        />
        <label
          className={twMerge(
            `px-[12px] text-foreground cursor-pointer ${disabled && "cursor-not-allowed"}`
          )}
          htmlFor={value}
        >
          <span>{label}</span>
        </label>
      </div>
    );
  }
);
