import React from "react";
import { Input } from "@headlessui/react";
import { TInputWithLabel } from "types/inputs";
import { Field } from "formik";

const TextInputWithLabel = ({
  id,
  name,
  children,
  placeholder,
  orient = "col",
  type = "text",
  // onUpdate,
  value,
}: TInputWithLabel<string>) => {
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label className="text-[15px]" htmlFor="oke">
        {children}
      </label>
      <Input
        as={Field}
        required
        id={id}
        name={name}
        type={type}
        // value={value}
        // onChange={(e) => onUpdate && onUpdate(e.target.value)}
        autoComplete="off"
        autoCorrect="disable"
        placeholder={placeholder}
        className="min-w-[250px] p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35]"
      />
    </div>
  );
};

export default TextInputWithLabel;
