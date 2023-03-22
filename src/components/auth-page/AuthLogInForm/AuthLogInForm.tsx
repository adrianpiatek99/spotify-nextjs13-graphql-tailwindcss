import React, { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button, Checkbox, Input } from "@/components/core";
import { useSignIn } from "@/hooks/useSignIn";
import type { LogInValues } from "@/schema/authSchema";
import { logInSchema } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { AuthErrorMessageBar } from "../AuthErrorMessageBar";

export const AuthLogInForm = () => {
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LogInValues>({
    resolver: zodResolver(logInSchema)
  });
  const [checked, setChecked] = useState(true);
  const { signIn, isLoading, error } = useSignIn({
    onSuccess: () => {
      reset();
      replace("/");
    }
  });

  const onSubmit: SubmitHandler<LogInValues> = async data => {
    await signIn(data);
  };

  return (
    <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit(onSubmit)}>
      {error && <AuthErrorMessageBar error={error} />}
      <Input
        label="Email address or username"
        error={errors.emailOrUsername?.message}
        disabled={isLoading}
        {...register("emailOrUsername")}
      />
      <Input
        type="password"
        label="Password"
        disabled={isLoading}
        error={errors.password?.message}
        {...register("password")}
      />
      <a className="link w-max" href="#">
        Forgot your password?
      </a>
      <div className="flex flex-col justify-between gap-[16px] md:flex-row md:items-start">
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          disabled={isLoading}
          name="login-remember"
          label="Remember me"
        />
        <Button type="submit" isLoading={isLoading}>
          Log in
        </Button>
      </div>
    </form>
  );
};
