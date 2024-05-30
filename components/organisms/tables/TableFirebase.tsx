import React, { Fragment } from "react";
import SkeletonTable from "components/organisms/skeleton/Tabel";
import { useApiFetch } from "hooks/useApiFetch";

const TablesList = ({}: { isLoading: boolean }) => {
  const { data, isLoading: isGetDataLoading } = useApiFetch();
  return (
    <table className="border-collapse border-spacing-6 mt-10 table-auto w-full">
      <thead>
        <tr className="bg-[#131B2E] text-[#fff] text-left border-b-2 border-b-black">
          <th className="py-4 pl-2">Name</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {isGetDataLoading ? (
          <SkeletonTable isLoading={isGetDataLoading} rows={3} cols={2} />
        ) : (
          <Fragment>
            {data &&
              data.map(({ name, gender, phone }, i) => {
                return (
                  <tr key={i} className="border-b-[1px] border-b-[#dfdfdf]">
                    <td className="py-4 pl-2">{name}</td>
                    <td>{phone}</td>
                    <td>{gender}</td>
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
