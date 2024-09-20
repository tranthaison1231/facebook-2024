import { z } from "zod";

export const forgotPasswordDto = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email is not valid. Please provide a valid email address."),
});

export const signInDto = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email is not valid. Please provide a valid email address."),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});

export const signUpDto = signInDto.extend({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(2, "First name must be at least 2 characters long"),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .min(2, "Last name must be at least 2 characters long"),
});

export const resetPasswordDto = z.object({
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
});
