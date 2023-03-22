import { isValidUsername, isValidYear } from "@/utils/isValid";
import { z } from "zod";

export type LogInValues = z.infer<typeof logInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;

export const AUTH_USERNAME_MAX_LENGTH = 50;
export const AUTH_PASSWORD_MAX_LENGTH = 16;

export const logInSchema = z.object({
  emailOrUsername: z
    .string()
    .min(4, "Your email/username cannot be shorter than 4 characters.")
    .max(
      AUTH_USERNAME_MAX_LENGTH,
      `Your name cannot be longer than ${AUTH_USERNAME_MAX_LENGTH} characters.`
    )
    .trim(),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters.")
    .max(
      AUTH_PASSWORD_MAX_LENGTH,
      `Password can't have more than ${AUTH_PASSWORD_MAX_LENGTH} characters.`
    )
});

export const signUpSchema = z
  .object({
    email: z.string().email("Must be a valid email.").trim(),
    repeatEmail: z.string().email("Must be a valid email.").trim(),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters.")
      .max(
        AUTH_PASSWORD_MAX_LENGTH,
        `Password can't have more than ${AUTH_PASSWORD_MAX_LENGTH} characters.`
      ),
    username: z
      .string()
      .min(4, "Your username cannot be shorter than 4 characters.")
      .max(
        AUTH_USERNAME_MAX_LENGTH,
        `Your name cannot be longer than ${AUTH_USERNAME_MAX_LENGTH} characters.`
      )
      .trim()
      .refine(value => isValidUsername(value), "Invalid characters or too many blank spaces."),
    day: z.string().min(1, "Must be a valid day.").max(2, "Must be a valid day."),
    year: z
      .string()
      .length(4, "Must be a valid year.")
      .refine(value => isValidYear(parseInt(value)), "Must be a valid year.")
  })
  .refine(data => data.email === data.repeatEmail, {
    message: "Email does not match.",
    path: ["repeatEmail"]
  });
