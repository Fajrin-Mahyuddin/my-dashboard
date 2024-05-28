"use client";
import SkeletonTable from "components/organisms/skeleton/Tabel";
import SkeletonCard from "components/organisms/skeleton/Card";
import BaseLayout from "components/templates/Layout";
import { useEffect, useState } from "react";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(params, searchParams);
  // export default function Page() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BaseLayout>
      <div className="flex flex-col bg-[#fff] h-full p-4 rounded-[10px]">
        <div className="flex gap-4">
          <SkeletonCard isLoading={isLoading} />
          <SkeletonCard isLoading={isLoading} />
          <SkeletonCard isLoading={isLoading} />
        </div>

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
              <SkeletonTable isLoading={isLoading} />
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
              </>
            )}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
}
