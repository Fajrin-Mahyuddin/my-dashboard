"use client";

import BaseLayout from "components/templates/Layout";
import TablesList from "components/organisms/tables/Tables";
import CardWrapper from "components/organisms/card/CardWrapper";
import { useEffect } from "react";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("oke");
      navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
        function (registration) {
          console.log(
            "Service Worker registration successful with scope: ",
            registration.scope,
          );
        },
        function (err) {
          console.log("Service Worker registration failed: ", err);
        },
      );
    }
  }, []);
  return (
    <BaseLayout>
      <div className="flex flex-col">
        <CardWrapper />
        <TablesList cols={2} rows={2} />
      </div>
    </BaseLayout>
  );
}
