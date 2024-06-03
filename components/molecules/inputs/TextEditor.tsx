"use client";
import { useField } from "formik";
import dynamic from "next/dynamic";
import React from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TTextEditor } from "types/inputs";

const ReactQuillDynamic = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ name }: TTextEditor) => {
  const [{ value }, __, helper] = useField(name);
  return (
    <div className="relative w-full h-[250px] mb-[50px]">
      <ReactQuillDynamic
        className="h-full placeholder:text[#d0d0d0]"
        theme="snow"
        value={value}
        placeholder="type here"
        onChange={(e) => helper.setValue(e)}
      />
    </div>
  );
};

export default TextEditor;
