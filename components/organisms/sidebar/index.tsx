import React from "react";
import Image from "next/image";
import logo from "assets/images/new-logo.svg";
import SidebarMenu from "components/atoms/menus/SidebarMenu";
import {
  FolderIcon,
  HomeIcon,
  CreditCardIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import SidebarMenuWithSub from "components/atoms/menus/SidebarMenuWithSubs";

const Sidebar = () => {
  return (
    <>
      <div className="p-4">
        <Image src={logo} alt="main-logo" className="w-14" />
      </div>
      <p className="mt-4 mb-2 px-3 text-[14px] tracking-wide">Menu</p>
      <ul>
        <SidebarMenu url="/" icon={HomeIcon}>
          Dashboard
        </SidebarMenu>
        <SidebarMenu url="/forms" icon={FolderIcon}>
          Forms
        </SidebarMenu>
        <SidebarMenu url="/forms" icon={CreditCardIcon}>
          Payment Gateway
        </SidebarMenu>
        <SidebarMenu url="/ui-components" icon={Square3Stack3DIcon}>
          UI Components
        </SidebarMenu>
        <SidebarMenu url="/state-management" icon={PuzzlePieceIcon}>
          State Management
        </SidebarMenu>
        <SidebarMenuWithSub
          icon={CircleStackIcon}
          label="Server-Less"
          subs={[
            { url: "server-less/firebase-page", label: "Firebase" },
            { url: "server-less/supabase-page", label: "Supabase" },
          ]}
        />
      </ul>
    </>
  );
};

export default Sidebar;
