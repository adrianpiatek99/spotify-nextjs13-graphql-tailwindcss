import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Checkbox, Input } from "@/components/core";
import type { LogInValues } from "@/schema/authSchema";
import { logInSchema } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const AuthLogInForm = () => {
  const {
    register,
    formState: { errors }
  } = useForm<LogInValues>({
    resolver: zodResolver(logInSchema)
  });
  const [checked, setChecked] = useState(true);

  // const onSubmit: SubmitHandler<LogInValues> = async () => {};

  return (
    <form
      className="flex flex-col gap-[16px]"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Email address or username"
        error={errors.emailOrUsername?.message}
        {...register("emailOrUsername")}
      />
      <Input
        type="password"
        label="Password"
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
          name="login-remember"
          label="Remember me"
        />
        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
};
