import { z } from "zod";

export const User = z.object({
  name: z
    .string({
      required_error: "Name required!",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {}),
  phone: z.string().superRefine((val, ctx) => {
    if (val === "" || isNaN(Number(val))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Only number! ",
      });
    } else if (Number(val) === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: " Enter a valid number! ",
      });
    }
  }),
  gender: z.string().refine((val) => val !== "", { message: "Choose one!" }),
  address: z.string().refine((val) => val !== "", { message: "Required!" }),
  desc: z.string().nullable(),
});
