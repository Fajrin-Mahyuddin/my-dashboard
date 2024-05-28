import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  UserCircleIcon,
  BellIcon,
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import SearchInput from "components/atoms/inputs/SearchInput";

const MainHeader = () => {
  return (
    <header className="py-3 px-6 flex flex-row bg-[white] justify-between items-center shadow-[rgba(149,157,165,0.2)_10px_0px_24px_0px]">
      <div>
        <SearchInput />
      </div>
      <div className="relative flex gap-4">
        <a href="# " className="relative">
          <span className="absolute flex h-3 w-3 right-0 top-[-3px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26440] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F26440]"></span>
          </span>
          <BellIcon className="size-6" />
        </a>
        <Menu>
          <MenuButton>
            <UserCircleIcon className="size-6" />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="rounded-md bg-[white] shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px,rgba(100,100,111,0.2)_0px_7px_29px_0px]  mt-2 flex flex-col"
          >
            <MenuItemWithStyle icon={Cog6ToothIcon} url="#">
              Settings
            </MenuItemWithStyle>
            <MenuItemWithStyle icon={ArrowLeftStartOnRectangleIcon} url="#">
              Sign out
            </MenuItemWithStyle>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};

const MenuItemWithStyle = ({
  children,
  url,
  icon: Icon,
}: {
  children: JSX.Element | string;
  url: string;
  icon: typeof Cog6ToothIcon;
}) => {
  return (
    <MenuItem>
      <a
        className="flex px-10 py-2 text-[15px] justify-center items-center gap-2 data-[focus]:text-hover"
        href={url}
      >
        <Icon className="size-5" />
        {children}
      </a>
    </MenuItem>
  );
};

export default MainHeader;
