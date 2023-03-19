import type { ComponentPropsWithRef, FC, Ref } from "react";
import React, { forwardRef } from "react";

import { twMerge } from "tailwind-merge";

export interface CheckboxProps extends Omit<ComponentPropsWithRef<"input">, "type" | "size"> {
  checked: boolean;
  name: string;
  label: string;
  onValueChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const classes = {
  hover: "enabled:hover:border-primary enabled:checked:hover:border-foreground",
  checked:
    "checked:border-primary checked:bg-primary checked:after:absolute checked:after:ml-[4px] checked:after:border-foreground checked:after:h-[12px] checked:after:w-[6px] checked:after:rotate-45 checked:after:border-[2px] checked:after:border-t-0 checked:after:border-l-0"
};

export const Checkbox: FC<CheckboxProps> = forwardRef(
  ({ checked, name, label, onValueChange = () => null, ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex min-h-[19px] items-center">
        <input
          className={twMerge(
            `relative h-[16px] w-[16px] appearance-none rounded border-[1px] border-gray outline-none focus:transition-[border-color_0.2s] focus-visible:shadow-focus cursor-pointer duration-200 ${classes.hover} ${classes.checked}`
          )}
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={e => onValueChange(e.target.checked)}
          {...props}
          ref={ref}
        />
        <label className="cursor-pointer px-[12px] text-foreground" htmlFor={name}>
          <span>{label}</span>
        </label>
      </div>
    );
  }
);
