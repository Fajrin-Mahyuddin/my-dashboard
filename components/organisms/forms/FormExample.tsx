import React from "react";
import TextEditor from "components/molecules/inputs/TextEditor";
import TextareaWithLabel from "components/molecules/inputs/TextareaWithLabel";
import SelectWithLabel from "components/molecules/selects/SelectWithLabel";
import TextInputWithLabel from "components/molecules/inputs/TextInputWithLabel";
import { useFirebase } from "hooks/useFirebase";
import { Form, Formik } from "formik";
import { useToast } from "states/zustand/useToast";
import StatusAlert from "components/molecules/alert/Status";

const FormExample = () => {
  const { add, isLoading } = useFirebase();
  const { setShow } = useToast();
  const user = {
    name: "",
    phone: "",
    gender: "",
    desc: "",
    address: "",
  };

  return (
    <div>
      <StatusAlert />
      <br />
      <Formik
        enableReinitialize
        initialValues={user}
        onSubmit={async (val, { setSubmitting }) => {
          setSubmitting(true);
          try {
            await add(val);
            setShow({
              msg: "Success!",
              show: true,
              status: "success",
            });
          } catch (error) {
            setShow({
              msg: `Something wrong! ${error}`,
              show: true,
              status: "error",
            });
          }
        }}
      >
        <Form>
          <div className="grid gap-4 grid-cols-3 mb-4">
            <TextInputWithLabel
              placeholder="name"
              name="name"
              id="name"
              orient="col"
            >
              Name
            </TextInputWithLabel>
            <TextInputWithLabel
              id="phone"
              orient="col"
              name="phone"
              type="number"
              placeholder="phone number"
            >
              Phone Number
            </TextInputWithLabel>
            <SelectWithLabel
              name="gender"
              id="gender"
              placeholder="Choose"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
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
          <TextEditor name="desc" id="desc" placeholder="type here" />
          <div className="flex mt-8 space-x-4">
            <button
              className="border p-2 w-[200px] flex flex-row justify-center items-center gap-2 rounded-md bg-[#E6AB35] text-[white] transition-all"
              // onClick={() => add(user)}
              type="submit"
            >
              {isLoading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="animate-spin size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : null}
              Submit
            </button>
            <button className="border p-2 w-[200px] rounded-md bg-[#F26440] text-[white] transition-all">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormExample;
