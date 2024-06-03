import { usePathname } from "next/navigation";

type TBreadcrumbValue = {
  url: string;
  label: string;
};

const useBreadcrumb = () => {
  const pathname = usePathname();
  let splitPathname = pathname.split("/");
  splitPathname.shift();

  const objVal: string[] = [];
  let breadcrumbsValue: TBreadcrumbValue[] = splitPathname.map((item) => {
    objVal.push(item);
    return {
      label: pathname === "/" ? "Dashboard" : item,
      url: "/" + objVal.join("/"),
    };
  });
  return breadcrumbsValue;
};

export default useBreadcrumb;
