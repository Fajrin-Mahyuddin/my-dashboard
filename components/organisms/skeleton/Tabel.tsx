import React from "react";

const SkeletonTable = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <tr className="animate-pulse border-b-[1px] border-b-[#dfdfdf]">
      <td className="py-4 pl-2">
        <div className="bg-[#000] rounded-md h-2 w-auto max-w-[200px]" />
      </td>
      <td>
        <div className="bg-[#000] rounded-md h-2 w-auto max-w-[200px]" />
      </td>
      <td>
        <div className="bg-[#000] rounded-md h-2 w-auto max-w-[200px]" />
      </td>
    </tr>
  );
};

export default SkeletonTable;
