import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { useFirebase } from "hooks/useFirebase";
import { renderHook } from "@testing-library/react";
import { useApiFetch } from "hooks/useApiFetch";

jest.mock("../hooks/useApiFetch.ts");
describe("fetch initial data", () => {
  test("fetch data from firebase", async () => {
    const { result } = renderHook(() => useFirebase());
    const { lists, errors, isLoading } = result.current;

    expect(lists).toEqual([]);
    expect(isLoading).toBeTruthy();
    expect(errors).toBeUndefined();
  });
});

describe("fetch successfull data", () => {
  let mockedData: never;
  beforeEach(() => {
    mockedData = [
      {
        name: "fajrin",
      },
    ] as never;
  });
  test("fetch data", () => {
    jest.fn().mockResolvedValue({ name: "fajrin" } as never);
  });
  test("fetch data from firebase", async () => {
    const { result } = renderHook(() => useApiFetch());
    const { data, isLoading } = result.current;
    console.log(data);
    expect(data).toEqual([{ name: "fajrin" }]);
    expect(isLoading).toBeTruthy();
  });
});
