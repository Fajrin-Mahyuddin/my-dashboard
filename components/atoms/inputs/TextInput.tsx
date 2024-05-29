import { Input } from "@headlessui/react";
import React from "react";

const TextInput = ({ id, name }: { id: string; name: string }) => {
  return (
    <Input
      className="self-start border outline-none"
      type="text"
      name={name}
      id={id}
    />
  );
};

export default TextInput;
