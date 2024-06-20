import { describe, test, expect } from "@jest/globals";
import { checkIsEmailAddress } from "utils";

describe("check utils function", () => {
  test("is email correct", () => {
    expect(checkIsEmailAddress("fajr.in@gma-il.com")).toBeTruthy();
    expect(checkIsEmailAddress("fajr.in01@gma-il.id")).toBeTruthy();
    expect(checkIsEmailAddress("fajr.in.c")).toBeFalsy();
    expect(checkIsEmailAddress("fa@jr.in.c")).toBeFalsy();
  });
});
