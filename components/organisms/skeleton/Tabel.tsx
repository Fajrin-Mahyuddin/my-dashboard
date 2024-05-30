import React from "react";

const SkeletonTable = ({
  isLoading,
  rows = 0,
  cols = 1,
}: {
  isLoading: boolean;
  rows?: number;
  cols?: number;
}) => {
  if (!isLoading) {
    return null;
  }
  return (
    <>
      {Array.from({ length: cols }).map((_, i) => (
        <tr key={i} className="animate-pulse border-b-[1px] border-b-[#dfdfdf]">
          <td className="py-4 pl-2">
            <div className="bg-[#000] rounded-md h-2 w-auto max-w-[200px]" />
          </td>
          {Array.from({ length: rows <= 0 ? rows : rows - 1 }).map((_, i) => (
            <td key={i}>
              <div className="bg-[#000] rounded-md h-2 w-auto max-w-[200px]" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkeletonTable;
