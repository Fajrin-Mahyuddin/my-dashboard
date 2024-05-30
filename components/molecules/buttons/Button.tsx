import React from "react";

type TButton = {
  onClick: (e?: number) => void;
  label: string;
};

const Button = ({ onClick, label }: TButton) => {
  return (
    <button className="p-2 border rounded-md" onClick={() => onClick(1)}>
      {label}
    </button>
  );
};

export default Button;
