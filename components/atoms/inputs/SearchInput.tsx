import React from "react";
import { Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
  return (
    <div className="flex">
      <Input
        type="search"
        name="q"
        autoComplete="off"
        className="px-2 py-1 border focus:outline-none rounded-md border-r-0 rounded-tr-none rounded-br-none"
      />
      <button className="border p-2 rounded-r-md">
        <MagnifyingGlassIcon className="size-4" />
      </button>
    </div>
  );
};

export default SearchInput;
