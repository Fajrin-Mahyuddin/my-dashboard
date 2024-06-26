"use client";
import React from "react";
import Image from "next/image";
// import bg from 'assets/images/bg.jpg';
import Breadcrumb from "components/atoms/breadcrumbs";
import MainHeader from "components/organisms/header";
import Sidebar from "components/organisms/sidebar";
import Footers from "components/atoms/footers";
import useBreadcrumb from "hooks/useBreadcrumb";
import PrelineScript from "components/templates/PrelineScript";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout = ({ children }: IBaseLayout) => {
  let breadcrumbsValue = useBreadcrumb();

  return (
    <main className="flex flex-row min-h-screen bg-[#f8f7f1]">
      <div className="w-[80rem] max-w-[300px] bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <MainHeader />
        <div className="flex flex-col h-full w-full gap-4 px-6">
          <Breadcrumb data={breadcrumbsValue} />
          <div className="bg-[#fff] h-full p-4 rounded-[10px]">{children}</div>
        </div>
        <Footers />
      </div>
      <PrelineScript />
    </main>
  );
};

export default BaseLayout;
