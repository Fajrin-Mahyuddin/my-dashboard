import React from "react";
import Image from "next/image";
import logo from "assets/images/new-logo.svg";
import SidebarMenu from "components/atoms/menus/SidebarMenu";

const Sidebar = () => {
  return (
    <>
      <div>
        <Image src={logo} alt="main-logo" className="w-14" />
      </div>
      <ul>
        <SidebarMenu label="Dashboard" url="/" />
        <SidebarMenu label="Forms" url="/form" />
        <SidebarMenu label="Profiles" url="/" />
        <SidebarMenu label="Settings" url="/" />
        <SidebarMenu label="Pages" url="/" />
      </ul>
    </>
  );
};

export default Sidebar;
