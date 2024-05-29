import TablesList from "components/organisms/tables/Tables";
import TextInputWithLabel from "components/molecules/inputs/TextInputWithLabel";
import BaseLayout from "components/templates/Layout";
import React from "react";

const FormPage = () => {
  return (
    <BaseLayout>
      <div className="bg-[white] h-full">
        <div className="grid gap-4 grid-cols-3">
          <TextInputWithLabel name="name" id="name" orient="col">
            Input name
          </TextInputWithLabel>
          <TextInputWithLabel type="email" name="email" id="email" orient="col">
            Email
          </TextInputWithLabel>
          <TextInputWithLabel name="occupation" id="occupation" orient="col">
            Occupation
          </TextInputWithLabel>
          <TextInputWithLabel
            type="number"
            name="phone"
            id="phone"
            orient="col"
          >
            Phone Number
          </TextInputWithLabel>
          <TextInputWithLabel name="occupation" id="occupation" orient="col">
            Address
          </TextInputWithLabel>
          <TextInputWithLabel name="occupation" id="occupation" orient="col">
            Address
          </TextInputWithLabel>
        </div>
        <div className="mt-8 space-x-4">
          <button className="border p-2 w-[200px] rounded-md bg-[#E6AB35] text-[white] transition-all">
            Submit
          </button>
          <button className="border p-2 w-[200px] rounded-md bg-[#F26440] text-[white] transition-all">
            Reset
          </button>
        </div>
        <TablesList isLoading={false} />
      </div>
    </BaseLayout>
  );
};

export default FormPage;
