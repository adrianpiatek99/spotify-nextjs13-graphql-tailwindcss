import type { FC } from "react";
import React, { useEffect, useMemo } from "react";
import type { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";

import type { SelectOption } from "@/components/core";
import { Input, InputErrorMessage, Select } from "@/components/core";
import { monthOptions } from "@/constants/monthOptions";
import type { SignUpValues } from "@/schema/authSchema";
import { daysInMonth } from "@/utils/date";

interface AuthSignUpFormBirthdayProps {
  register: UseFormRegister<SignUpValues>;
  errors: FieldErrors<SignUpValues>;
  watch: UseFormWatch<SignUpValues>;
  setValue: UseFormSetValue<SignUpValues>;
  selectedMonth: SelectOption | null;
  handleSelectMonth: (option: SelectOption) => void;
  isMonthError: boolean;
}

export const AuthSignUpFormBirthday: FC<AuthSignUpFormBirthdayProps> = ({
  register,
  errors,
  watch,
  setValue,
  selectedMonth,
  handleSelectMonth,
  isMonthError
}) => {
  const dayErrorMessage = errors.day?.message;
  const yearErrorMessage = errors.year?.message;
  const dayValue = Number(watch("day"));
  const yearValue = Number(watch("year"));

  const maxDayInputValue = useMemo(
    () => (selectedMonth && yearValue ? daysInMonth(selectedMonth.id, yearValue) : 31),
    [yearValue, selectedMonth]
  );

  useEffect(() => {
    if (dayValue > maxDayInputValue) {
      setValue("day", String(maxDayInputValue));
    }
  }, [dayValue, yearValue, setValue, maxDayInputValue]);

  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="grid w-full grid-cols-[1fr_3fr_1fr] gap-[16px]">
        <Input
          label="Day"
          maxLength={2}
          min={1}
          max={maxDayInputValue}
          hideErrorMessage
          error={errors.day?.message}
          {...register("day")}
        />
        <Select
          label="Month"
          selectedOption={selectedMonth}
          options={monthOptions}
          isError={isMonthError}
          onChange={handleSelectMonth}
        />
        <Input
          label="Year"
          maxLength={4}
          hideErrorMessage
          error={errors.year?.message}
          {...register("year")}
        />
      </div>
      {dayErrorMessage && <InputErrorMessage error={dayErrorMessage} />}
      {isMonthError && <InputErrorMessage error={"Select month."} />}
      {yearErrorMessage && <InputErrorMessage error={yearErrorMessage} />}
    </div>
  );
};
