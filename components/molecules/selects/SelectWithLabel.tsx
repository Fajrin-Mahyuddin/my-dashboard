import React from "react";
import { Select } from "@headlessui/react";
import { ISelectWithLabel } from "types/inputs";
import { ErrorMessage, Field, FieldProps, useField } from "formik";

const SelectWithLabel = ({
  id,
  name,
  children,
  orient = "col",
  options,
  placeholder,
  // onUpdate,
}: ISelectWithLabel) => {
  const [field, meta, helper] = useField(name);
  return (
    <div className={`flex flex-${orient} gap-2`}>
      <label className="text-[15px]" htmlFor={id}>
        {children}
      </label>
      <Select
        {...field}
        id={id}
        className={`${meta.error && meta.touched ? "error" : ""} min-w-[250px] p-[0.60rem] rounded-md outline-none border-[2px] focus:border-[2px] border-box focus:border-[#E6AB35] hs-error:border-[red]`}
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
      <div className="text-[12px] text-[red]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default SelectWithLabel;
