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
    <main className="flex flex-col h-screen bg-slate-400">
      <MainHeader />
      {/* sidebar and content */}
      <div className="flex flex-row h-screen w-full bg-red-300">
        <div className="w-[80rem] max-w-[300px] mt-4">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-4 bg-fuchsia-300 p-4">
          <Breadcrumb />
          {children}
          <Footers />
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
