"use client";
import React from "react";
import BaseLayout from "components/templates/Layout";

const UiComponentPage = ({ params }: { params: { slug: string[] } }) => {
  console.log("params", params.slug);
  return (
    <BaseLayout>
      <div className="h-full">
        <h2>UI Components - {["sdfasd", "asddfs"]}</h2>
        <br />
      </div>
    </BaseLayout>
  );
};

export default UiComponentPage;
