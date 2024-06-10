import { Textarea } from "@headlessui/react";
import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import { TTextareaWithLabel } from "types/inputs";

const TextareaWithLabel = ({
  id,
  name,
  placeholder,
  children,
  orient,
  // onUpdate,
}: TTextareaWithLabel) => {
  const [field, meta, helper] = useField(name);
  // console.log("error meta", meta);
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label htmlFor={id}>{children}</label>
      <Textarea
        {...field}
        id={id}
        // required
        // onChange={(e) => onUpdate && onUpdate(e.target.value)}
        className={`${meta.error && meta.touched ? "error" : ""} p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35] hs-error:border-[red]`}
        placeholder={placeholder}
      />
      <div className="text-[12px] text-[red]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default TextareaWithLabel;
