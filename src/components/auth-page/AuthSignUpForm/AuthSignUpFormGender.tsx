import type { FC } from "react";
import React from "react";

import { InputErrorMessage, Radio } from "@/components/core";
import { genderOptions } from "@/constants/genderOptions";
import type { Gender } from "@prisma/client";

interface AuthSignUpFormGenderProps {
  selectedGender: Gender | null;
  handleSelectGender: (value: Gender) => void;
  isGenderError: boolean;
}

export const AuthSignUpFormGender: FC<AuthSignUpFormGenderProps> = ({
  selectedGender,
  handleSelectGender,
  isGenderError
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-semibold">Gender</span>
      <div className="flex flex-wrap gap-2.5">
        {genderOptions.map(({ value, label }) => (
          <Radio
            key={value}
            checked={value === selectedGender}
            name="genderRadioGroup"
            value={value}
            label={label}
            isError={isGenderError}
            onValueChange={value => handleSelectGender(value as Gender)}
          />
        ))}
      </div>
      {isGenderError && <InputErrorMessage error={"Select gender."} />}
    </div>
  );
};
