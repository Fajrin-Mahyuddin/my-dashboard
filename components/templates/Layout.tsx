"use client";
import React from "react";
import Image from "next/image";

import Breadcrumb from "components/atoms/breadcrumbs";
import MainHeader from "components/organisms/header";
import Sidebar from "components/organisms/sidebar";
import Footers from "components/atoms/footers";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <main className="flex flex-row h-screen bg-[#fff]">
      <div className="w-[80rem] max-w-[300px] bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <MainHeader />
        <div className="flex flex-col h-full w-full gap-4 px-6">
          <Breadcrumb />
          {children}
        </div>
        <Footers />
      </div>
    </main>
  );
};

export default BaseLayout;
