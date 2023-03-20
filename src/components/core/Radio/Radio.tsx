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
}

const classes = {
  hover: "enabled:hover:border-primary enabled:checked:hover:border-primary/75",
  checked: "checked:border-[3px] checked:border-primary"
};

export const Radio: FC<RadioProps> = forwardRef(
  (
    { value, name, label, checked, onValueChange = () => null, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="flex min-h-[19px] items-center">
        <input
          className={twMerge(
            `relative h-[16px] w-[16px] appearance-none rounded-full bg-background2 border-[1px] border-gray outline-none cursor-pointer duration-150 focus-visible:shadow-focus ${classes.hover} ${classes.checked}`
          )}
          type="radio"
          id={value}
          value={value}
          name={name}
          checked={checked}
          onChange={e => onValueChange(e.target.value)}
          {...props}
          ref={ref}
        />
        <label className="cursor-pointer px-[12px] text-foreground" htmlFor={value}>
          <span>{label}</span>
        </label>
      </div>
    );
  }
);
