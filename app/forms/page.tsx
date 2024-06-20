"use client";
import React, { useEffect } from "react";
import BaseLayout from "components/templates/Layout";
import FormExample from "components/organisms/forms/FormExample";
import TableFirebase from "components/organisms/tables/TableFirebase";

const FormPage = () => {
  return (
    <BaseLayout>
      <div className="h-full">
        <FormExample />
        <TableFirebase />
      </div>
    </BaseLayout>
  );
};

export default FormPage;
