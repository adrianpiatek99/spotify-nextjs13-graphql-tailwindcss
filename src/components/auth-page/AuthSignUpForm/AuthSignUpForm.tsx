import React, { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { InputType, SelectOption } from "@/components/core";
import { Button, Input } from "@/components/core";
import { signUp } from "@/graphql/api";
import type { Gender } from "@/graphql/graphql";
import type { SignUpValues } from "@/schema/authSchema";
import { signUpSchema } from "@/schema/authSchema";
import { createDate } from "@/utils/date";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { AuthSignUpFormBirthday } from "./AuthSignUpFormBirthday";
import { AuthSignUpFormGender } from "./AuthSignUpFormGender";

const inputs: { name: keyof SignUpValues; label: string; type?: InputType }[] = [
  { name: "email", label: "Email" },
  { name: "repeatEmail", label: "Confirm your email" },
  { name: "password", label: "Create a password", type: "password" },
  { name: "username", label: "What should we call you?" }
];

export const AuthSignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema)
  });
  const [selectedMonth, setSelectedMonth] = useState<SelectOption | null>(null);
  const [isMonthError, setIsMonthError] = useState(false);
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [isGenderError, setIsGenderError] = useState(false);
  const { mutate, isLoading } = useMutation({ mutationFn: signUp });

  const onSubmit: SubmitHandler<SignUpValues> = async data => {
    if (isMonthError || isGenderError || !selectedGender || !selectedMonth) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { day, year, repeatEmail, ...restData } = data;

    const dateOfBirth = createDate(year, selectedMonth.id, day);

    mutate({ input: { ...restData, dateOfBirth, gender: selectedGender } });
  };

  const validateForm = () => {
    if (!selectedMonth) setIsMonthError(true);

    if (!selectedGender) setIsGenderError(true);
  };

  const handleSelectMonth = (option: SelectOption) => {
    setSelectedMonth(option);
    setIsMonthError(false);
  };

  const handleSelectGender = (value: Gender) => {
    setSelectedGender(value);
    setIsGenderError(false);
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <form
        className="flex flex-col gap-[16px]"
        onSubmit={e => {
          validateForm();
          handleSubmit(onSubmit)(e);
        }}
      >
        {inputs.map(({ name, ...restProps }) => (
          <Input
            key={name}
            disabled={isLoading}
            error={errors[name]?.message}
            {...register(name)}
            {...restProps}
          />
        ))}
        <AuthSignUpFormBirthday
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          selectedMonth={selectedMonth}
          handleSelectMonth={handleSelectMonth}
          isMonthError={isMonthError}
          isLoading={isLoading}
        />
        <AuthSignUpFormGender
          selectedGender={selectedGender}
          handleSelectGender={handleSelectGender}
          isGenderError={isGenderError}
          isLoading={isLoading}
        />
        <div className="mb-[14px] grid items-center md:justify-center">
          <Button fullWidth isLoading={isLoading}>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};
