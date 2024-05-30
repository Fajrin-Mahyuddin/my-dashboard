import { LinkIcon } from "@heroicons/react/24/outline";
import React from "react";

type TBreadcrumb = {
  data: {
    url: string;
    label: string;
  }[];
};
const Breadcrumb = ({ data }: TBreadcrumb) => {
  return (
    <ul className="flex text-[14px] items-center text-[#7c7c7c] flex-row gap-2 [&>li+li]:before:content-['/\00a0'] capitalize">
      <LinkIcon className="size-4" />
      {data.map(({ url, label }, i) => {
        return (
          <li key={i}>
            <a className="hover:text-hover" href={url}>
              {label}
            </a>
          </li>
        );
      })}
      {/* <li>home</li>
      <li>form</li>
      <li>input</li> */}
    </ul>
  );
};

export default Breadcrumb;
