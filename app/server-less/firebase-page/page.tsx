"use client";
import React from "react";
import BaseLayout from "components/templates/Layout";

const ServerLessPage = () => {
  return (
    <BaseLayout>
      <div className="h-full">
        <h2>{process.env.NEXT_PUBLIC_MY_KEY}</h2>
        <br />
      </div>
    </BaseLayout>
  );
};

export default ServerLessPage;
