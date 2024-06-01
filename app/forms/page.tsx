"use client";
import React from "react";
import BaseLayout from "components/templates/Layout";
import TablesList from "components/organisms/tables/Tables";
import FormExample from "components/organisms/forms/FormExample";

const FormPage = () => {
  return (
    <BaseLayout>
      <div className="h-full">
        <FormExample />
        <TablesList isLoading={false} />
      </div>
    </BaseLayout>
  );
};

export default FormPage;
