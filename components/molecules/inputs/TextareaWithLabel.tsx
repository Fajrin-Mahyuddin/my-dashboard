import { Textarea } from "@headlessui/react";
import { Field, useField } from "formik";
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
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label htmlFor={id}>{children}</label>
      <Textarea
        {...field}
        id={id}
        required
        // onChange={(e) => onUpdate && onUpdate(e.target.value)}
        className="p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaWithLabel;
