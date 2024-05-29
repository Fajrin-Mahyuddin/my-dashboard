import React from "react";

const Label = ({
  children,
  htmlFor,
}: {
  children: string;
  htmlFor: string;
}) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
