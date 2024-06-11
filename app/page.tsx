"use client";

import BaseLayout from "components/templates/Layout";
import TablesList from "components/organisms/tables/Tables";
import CardWrapper from "components/organisms/card/CardWrapper";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <BaseLayout>
      <div className="flex flex-col">
        <CardWrapper />
        <TablesList cols={2} rows={2} />
      </div>
    </BaseLayout>
  );
}
