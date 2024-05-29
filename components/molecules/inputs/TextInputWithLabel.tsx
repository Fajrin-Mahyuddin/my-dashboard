import React from "react";
import { Input } from "@headlessui/react";

const TextInputWithLabel = ({
  children,
  name,
  id,
  orient = "col",
  type = "text",
}: {
  id: string;
  name: string;
  children?: string;
  type?: "text" | "email" | "number";
  orient?: "row" | "col";
}) => {
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label className="text-[15px]" htmlFor="oke">
        {children}
      </label>
      <Input
        type={type}
        className="min-w-[250px] p-2 rounded-md border outline-none"
        name={name}
        id={id}
        autoComplete="off"
        autoCorrect="disable"
      />
    </div>
  );
};

export default TextInputWithLabel;
