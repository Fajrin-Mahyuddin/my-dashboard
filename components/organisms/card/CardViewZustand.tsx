import React from "react";
import { useTextNumber } from "states/zustand/useTextNumber";

const CardViewZustand = () => {
  const { text, number } = useTextNumber((state) => state);
  return (
    <div className="flex gap-2 flex-col border p-2 rounded-md w-full">
      <label htmlFor="result">Another component</label>
      <div className="grid grid-cols-2 items-center">
        <div className="break-words">{text}</div>
        <div className="text-center text-[25px] h-full">{number}</div>
      </div>
    </div>
  );
};

export default CardViewZustand;
