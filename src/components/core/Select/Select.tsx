import type { FC } from "react";
import { Fragment } from "react";
import React from "react";

import { ChevronIcon } from "@/icons";
import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import type { SelectOption } from "./Select.type";

interface SelectProps {
  label: string;
  selectedOption: SelectOption | null;
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  error?: boolean;
}

const buttonClasses = {
  hover: "enabled:hover:shadow-[inset_0px_0px_0px_1px_theme('colors.gray.200')]",
  focus: "enabled:focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.gray.200')]",
  error:
    "shadow-[inset_0px_0px_0px_1px_theme('colors.error')] enabled:hover:shadow-[inset_0px_0px_0px_1px_theme('colors.error')] enabled:focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.error')]"
};

const optionClasses = {
  hover: "hover:bg-gray hover:shadow-none",
  active: "active:bg-gray/75",
  focus: "bg-gray/60",
  selected: "text-foreground"
};

export const Select: FC<SelectProps> = ({
  label,
  selectedOption,
  options,
  onChange,
  error = false
}) => {
  return (
    <div className="relative z-10 flex flex-col">
      <span className="mb-2 font-semibold">{label}</span>
      <Listbox value={selectedOption} onChange={e => e && onChange(e)}>
        <Listbox.Button
          className={twMerge(
            `relative bg-background2 w-full cursor-pointer rounded px-[14px] py-[15.5px] pr-[50px] text-left shadow-[inset_0px_0px_0px_1px_theme('colors.gray.DEFAULT')] duration-200 ${
              !selectedOption && "text-gray-200"
            } ${buttonClasses.hover} ${buttonClasses.focus} ${error && buttonClasses.error}`
          )}
        >
          {selectedOption ? selectedOption.name : label}
          <ChevronIcon className="absolute top-[4px] right-[14px] h-[20px] w-[20px] translate-y-2/4 fill-foreground" />
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded border-[1px] border-gray bg-background2 py-1.5 shadow-[0px_2px_10px_theme('colors.background1')] focus:outline-none">
            {options.map(option => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={twMerge(
                      `relative text-gray-100 py-[14px] px-[14px] mx-1.5 rounded cursor-pointer select-none font-medium duration-100 ${
                        optionClasses.hover
                      } ${optionClasses.active} ${active && optionClasses.focus} ${
                        selected && optionClasses.selected
                      }`
                    )}
                  >
                    {option.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
