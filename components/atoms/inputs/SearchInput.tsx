import React from "react";
import { Input } from "@headlessui/react";

const SearchInput = () => {
  return (
    <Input
      type="search"
      name="q"
      autoComplete="off"
      className="px-2 py-1 border focus:outline-none rounded-md w"
    />
  );
};

export default SearchInput;
