import React from "react";

const Breadcrumb = () => {
  return (
    <ul className="flex text-[14px] text-[#7c7c7c] flex-row gap-2 [&>li+li]:before:content-['/\00a0'] capitalize">
      <li>home</li>
      <li>form</li>
      <li>input</li>
    </ul>
  );
};

export default Breadcrumb;
