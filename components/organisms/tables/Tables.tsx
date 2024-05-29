import React from "react";
import SkeletonTable from "components/organisms/skeleton/Tabel";

const TablesList = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <table className="border-collapse border-spacing-6 mt-10 table-auto w-full">
      <thead>
        <tr className="bg-[#131B2E] text-[#fff] text-left border-b-2 border-b-black">
          <th className="py-4 pl-2">Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <SkeletonTable isLoading={isLoading} rows={3} cols={2} />
        ) : (
          <>
            <tr className="border-b-[1px] border-b-[#dfdfdf]">
              <td className="py-4 pl-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr className="border-b-[1px] border-b-[#dfdfdf]">
              <td className="py-4 pl-2">Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr className="border-b-[1px] border-b-[#dfdfdf]">
              <td className="py-4 pl-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr className="border-b-[1px] border-b-[#dfdfdf]">
              <td className="py-4 pl-2">Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr className="border-b-[1px] border-b-[#dfdfdf]">
              <td className="py-4 pl-2">Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default TablesList;
