import React from "react";

type TSidebarMenu = {
  label: string;
  url?: string;
};
const SidebarMenu = ({ label, url = "# " }: TSidebarMenu) => {
  return (
    <li>
      <a
        href={url}
        className="hover:bg-[#101010] hover:text-[white] w-full inline-block p-3 font-caros"
      >
        {label}
      </a>
    </li>
  );
};

export default SidebarMenu;
