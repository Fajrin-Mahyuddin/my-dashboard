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

export function sumValue(a: number, b: number): number {
  return a + b;
}

export function returnArr(a: number): number {
  return a * 1;
}
