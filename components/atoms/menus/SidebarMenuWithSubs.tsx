import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import {
  FolderIcon,
  HomeIcon,
  CreditCardIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
  Square3Stack3DIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import SidebarMenu from "components/atoms/menus/SidebarMenu";

type TSidebarMenuWithSub = {
  icon: typeof TrophyIcon;
  label: string;
  subs: {
    url: string;
    label: string;
  }[];
};
const SidebarMenuWithSub = ({
  label,
  icon: Icon,
  subs,
}: TSidebarMenuWithSub) => {
  return (
    <Disclosure>
      <DisclosureButton className="group flex items-center justify-between hover:text-hover [&>.icon]:hover:text-hover w-full p-3 font-extralight tracking-wide">
        <div className="flex gap-2">
          <Icon className="icon size-5 text-[#b1b1b1]" />
          {label}
        </div>
        <ChevronRightIcon className="size-4 group-data-[open]:rotate-90 transition-all" />
      </DisclosureButton>
      <DisclosurePanel className="gap-2 flex flex-col">
        {subs.map(({ url, label }, i) => {
          return (
            <SidebarMenu
              key={i}
              isSub={true}
              url={url}
              icon={ChevronDoubleRightIcon}
            >
              {label}
            </SidebarMenu>
          );
        })}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default SidebarMenuWithSub;
