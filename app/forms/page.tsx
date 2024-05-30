import TablesList from "components/organisms/tables/Tables";
import TextInputWithLabel from "components/molecules/inputs/TextInputWithLabel";
import BaseLayout from "components/templates/Layout";
import React from "react";
import TextareaWithLabel from "components/molecules/inputs/TextareaWithLabel";
import SelectWithLabel from "components/molecules/selects/SelectWithLabel";
import TextEditor from "components/molecules/inputs/TextEditor";

const FormPage = () => {
  return (
    <BaseLayout>
      <div className="h-full">
        <div className="grid gap-4 grid-cols-3 mb-4">
          <TextInputWithLabel placeholder="" name="name" id="name" orient="col">
            Name
          </TextInputWithLabel>
          <TextInputWithLabel
            id="phone"
            orient="col"
            name="phone"
            type="number"
            placeholder=""
          >
            Phone Number
          </TextInputWithLabel>
          <SelectWithLabel
            name="gender"
            id="gender"
            placeholder="Choose"
            options={[
              { value: "male", label: "Male" },
              { value: "male", label: "Female" },
            ]}
          >
            Gender
          </SelectWithLabel>
        </div>
        <TextareaWithLabel
          placeholder="Address goes here"
          name="address"
          id="address"
          orient="col"
        >
          Address
        </TextareaWithLabel>
        <br />
        <TextEditor />
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
