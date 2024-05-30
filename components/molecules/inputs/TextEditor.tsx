"use client";
import dynamic from "next/dynamic";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuillDynamic = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = () => {
  return (
    <div className="relative w-full h-[250px] mb-[50px]">
      <ReactQuillDynamic className="h-full" theme="snow" />
    </div>
  );
};

export default TextEditor;
