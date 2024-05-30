import React from "react";
import { Select } from "@headlessui/react";
import { ISelectWithLabel } from "types/inputs";

const SelectWithLabel = ({
  id,
  name,
  children,
  orient = "col",
  options,
  placeholder,
  onUpdate,
}: ISelectWithLabel) => {
  return (
    <div className={`flex flex-${orient} gap-2`}>
      <label htmlFor={id}>{children}</label>
      <Select
        required
        name={name}
        id={id}
        onChange={(e) => onUpdate && onUpdate(e.target.value)}
        className="p-2 rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35]"
      >
        <option value="">{placeholder}</option>
        {options.map((item, i) => {
          return (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectWithLabel;
