import SidebarMenu from "components/atoms/menus/SidebarMenu";
import React from "react";

const Sidebar = () => {
  return (
    <ul>
      <SidebarMenu label="Dashboard" url="/" />
      <SidebarMenu label="Forms" url="/form" />
      <SidebarMenu label="Profiles" url="/" />
      <SidebarMenu label="Settings" url="/" />
      <SidebarMenu label="Pages" url="/" />
    </ul>
  );
};

export default Sidebar;
