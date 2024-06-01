import { Textarea } from "@headlessui/react";
import React from "react";
import { TTextareaWithLabel } from "types/inputs";

const TextareaWithLabel = ({
  id,
  name,
  placeholder,
  children,
  orient,
  onUpdate,
}: TTextareaWithLabel) => {
  return (
    <div className={`flex gap-2 flex-${orient}`}>
      <label htmlFor={id}>{children}</label>
      <Textarea
        required
        className="p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35]"
        name={name}
        id={id}
        onChange={(e) => onUpdate && onUpdate(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextareaWithLabel;
