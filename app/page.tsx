"use client";

import SkeletonCard from "components/organisms/skeleton/Card";
import BaseLayout from "components/templates/Layout";
import { useEffect, useState } from "react";
import CardStatistic from "components/organisms/card/CardStatistic";
import {
  EnvelopeIcon,
  PresentationChartBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import TablesList from "components/organisms/tables/Tables";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // console.log(params, searchParams);
  // export default function Page() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BaseLayout>
      <div className="flex flex-col">
        {isLoading ? (
          <div className="flex gap-4">
            <SkeletonCard isLoading={isLoading} />
            <SkeletonCard isLoading={isLoading} />
            <SkeletonCard isLoading={isLoading} />
          </div>
        ) : (
          <div className="flex gap-2">
            <CardStatistic
              label="Messages"
              desc="Lorem ipsum dolor sit amet consectetur"
              icon={EnvelopeIcon}
            />
            <CardStatistic
              label="Inbox"
              desc="Lorem ipsum dolor sit amet"
              icon={PresentationChartBarIcon}
              colors="bg-[#F26440]"
            />
            <CardStatistic
              label="Product sell"
              desc="Lorem ipsum "
              icon={ShoppingCartIcon}
              colors="bg-[#E6AB35]"
            />
          </div>
        )}
        <TablesList cols={2} rows={2} />
      </div>
    </BaseLayout>
  );
}
