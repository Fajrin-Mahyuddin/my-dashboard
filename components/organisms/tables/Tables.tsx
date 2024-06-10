import React, { Fragment } from "react";
import SkeletonTable from "components/organisms/skeleton/Tabel";
import { useApiFetch } from "hooks/useApiFetch";

const TablesList = ({ rows, cols }: { rows: number; cols: number }) => {
  const { data, isLoading: isGetDataLoading } = useApiFetch();
  return (
    <table className="border-collapse border-spacing-6 mt-10 table-auto w-full">
      <thead>
        <tr className="bg-[#131B2E] text-[#fff] text-left border-b-2 border-b-black">
          <th className="py-4 pl-2">Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {isGetDataLoading ? (
          <SkeletonTable isLoading={isGetDataLoading} rows={rows} cols={cols} />
        ) : (
          <Fragment>
            {data &&
              data.map(({ name, address }, i) => {
                return (
                  <tr key={i} className="border-b-[1px] border-b-[#dfdfdf]">
                    <td className="py-4 pl-2">{name}</td>
                    <td>{address}</td>
                  </tr>
                );
              })}
          </Fragment>
        )}
      </tbody>
    </table>
  );
};

export default TablesList;
