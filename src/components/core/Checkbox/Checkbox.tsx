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
  hover:
    "enabled:hover:border-primary enabled:checked:hover:border-primary/75 enabled:checked:hover:bg-primary/75",
  active: "enabled:active:border-primary/60 enabled:checked:active:bg-primary/60",
  checked:
    "checked:border-primary checked:bg-primary checked:after:absolute checked:after:ml-[4px] checked:after:border-foreground checked:after:h-[12px] checked:after:w-[6px] checked:after:rotate-45 checked:after:border-[2px] checked:after:border-t-0 checked:after:border-l-0",
  disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
};

export const Checkbox: FC<CheckboxProps> = forwardRef(
  (
    { checked, name, label, onValueChange = () => null, disabled = false, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className="flex min-h-[19px] items-center">
        <input
          className={twMerge(
            `relative h-[16px] w-[16px] appearance-none rounded border-[1px] border-gray outline-none focus:transition-[border-color_0.2s] focus-visible:shadow-focus cursor-pointer duration-200 ${classes.hover} ${classes.active} ${classes.disabled} ${classes.checked}`
          )}
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={e => onValueChange(e.target.checked)}
          disabled={disabled}
          {...props}
          ref={ref}
        />
        <label
          className={twMerge(
            `cursor-pointer px-[12px] text-foreground ${
              disabled && "opacity-50 cursor-not-allowed"
            }`
          )}
          htmlFor={name}
        >
          <span>{label}</span>
        </label>
      </div>
    );
  }
);
