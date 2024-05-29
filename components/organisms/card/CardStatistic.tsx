import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type TCardStatistic = {
  label: string;
  desc: string;
  colors?: string;
  icon: typeof EnvelopeIcon;
};
const CardStatistic = ({
  label,
  desc,
  icon: Icon,
  colors = "#286F6C",
}: TCardStatistic) => {
  return (
    <div className="border w-full bg-[#fff] rounded-lg p-4 flex items-end flex-col">
      <div className={`bg-[${colors}] text-[white] p-2 rounded-full mb-4`}>
        <Icon className="size-5" />
      </div>
      <p className="font-bold uppercase text-[20px]">{label}</p>
      <span className="text-[11px] font-light italic text-[#868686]">
        {desc}
      </span>
    </div>
  );
};

export default CardStatistic;
