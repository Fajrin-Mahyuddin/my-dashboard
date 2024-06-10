import React from "react";
import { Input } from "@headlessui/react";
import { TInputWithLabel } from "types/inputs";
import { ErrorMessage, Field, useField } from "formik";

const TextInputWithLabel = ({
  id,
  name,
  children,
  placeholder,
  orient = "col",
  type = "text",
  // onUpdate,
  // value,
}: TInputWithLabel<string>) => {
  const [field, meta, helper] = useField(name);
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label className="text-[15px]" htmlFor="oke">
        {children}
      </label>
      <Input
        // as={Field}
        {...field}
        id={id}
        name={name}
        // type={type}
        autoComplete="off"
        autoCorrect="disable"
        placeholder={placeholder}
        className={`${meta.error && meta.touched ? "error" : ""} min-w-[250px] p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35] hs-error:border-[red]`}
      />
      <div className="text-[12px] text-[red]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default TextInputWithLabel;
