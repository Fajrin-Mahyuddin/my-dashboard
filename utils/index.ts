import { AnyZodObject, ZodError } from "zod";

export const validationForm = <T>(values: T, Field: AnyZodObject) => {
  try {
    Field.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.formErrors.fieldErrors;
    }
  }
};
