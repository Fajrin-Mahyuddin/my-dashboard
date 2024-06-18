import "@testing-library/jest-dom";
import { expect, test, describe } from "@jest/globals";
import { returnArr, sumValue } from "utils";

describe("sum function", () => {
  test("sum params", () => {
    expect(sumValue(2, 4)).toBe(6);
  });

  test("testing function return multiply by itself", () => {
    expect(returnArr(3)).toBe(3);
  });
});
