import React, { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { SelectOption } from "@/components/core";
import { Button, Input } from "@/components/core";
import type { SignUpValues } from "@/schema/authSchema";
import { signUpSchema } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Gender } from "@prisma/client";

import { AuthSignUpFormBirthday } from "./AuthSignUpFormBirthday";
import { AuthSignUpFormGender } from "./AuthSignUpFormGender";

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

  const onSubmit: SubmitHandler<SignUpValues> = async () => {
    if (isMonthError || isGenderError) return;
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
        <Input label="Email" error={errors.email?.message} {...register("email")} />
        <Input
          label="Confirm your email"
          error={errors.repeatEmail?.message}
          {...register("repeatEmail")}
        />
        <Input
          type="password"
          label="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          label="What should we call you?"
          error={errors.username?.message}
          {...register("username")}
        />
        <AuthSignUpFormBirthday
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          selectedMonth={selectedMonth}
          handleSelectMonth={handleSelectMonth}
          isMonthError={isMonthError}
        />
        <AuthSignUpFormGender
          selectedGender={selectedGender}
          handleSelectGender={handleSelectGender}
          isGenderError={isGenderError}
        />
        <div className="mb-[14px] grid items-center md:justify-center">
          <Button fullWidth>Sign up</Button>
        </div>
      </form>
    </div>
  );
};
