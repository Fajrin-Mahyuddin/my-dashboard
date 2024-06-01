"use client";
import dynamic from "next/dynamic";
import React from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TTextEditor } from "types/inputs";

const ReactQuillDynamic = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ onUpdate }: TTextEditor) => {
  return (
    <div className="relative w-full h-[250px] mb-[50px]">
      <ReactQuillDynamic
        onChange={(e) => onUpdate && onUpdate(e)}
        className="h-full"
        theme="snow"
      />
    </div>
  );
};

export default TextEditor;
