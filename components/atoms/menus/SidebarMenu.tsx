import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";

type TSidebarMenu = {
  icon: typeof TrophyIcon;
  children: string | JSX.Element;
  url?: string;
  isSub?: boolean;
};
const SidebarMenu = ({
  children,
  icon: Icon,
  url = "# ",
  isSub = false,
}: TSidebarMenu) => {
  return (
    <li>
      <a
        href={url}
        className={`flex gap-2 hover:text-hover [&>.icon]:hover:text-hover w-full ${isSub ? "pl-9 text-[15px]" : "p-3"} font-extralight tracking-wide`}
      >
        <Icon className="icon size-5 text-[#b1b1b1]" />
        {children}
      </a>
    </li>
  );
};

export default SidebarMenu;
