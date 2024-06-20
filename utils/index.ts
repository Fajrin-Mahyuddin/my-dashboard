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

export function checkIsEmailAddress(email: string): boolean {
  const emailReg = /^[\w\.]+@([\w-]+)\.[\w]{2,4}$/g;
  return emailReg.test(email);
}

export async function fetchData(): Promise<string[]> {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("call before test running");
      return res(["success"]);
    }, 300);
  });
}
