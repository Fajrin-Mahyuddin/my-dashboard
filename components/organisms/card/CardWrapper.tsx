import React, { useEffect, useState } from "react";
import CardStatistic from "components/organisms/card/CardStatistic";
import {
  EnvelopeIcon,
  PresentationChartBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import SkeletonCard from "components/organisms/skeleton/Card";
// import { useFcm } from "hooks/useFcm";

const CardWrapper = () => {
  const [isLoading, setLoading] = useState(true);
  // const fcm = useFcm();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex gap-4">
          <SkeletonCard isLoading={isLoading} />
          <SkeletonCard isLoading={isLoading} />
          <SkeletonCard isLoading={isLoading} />
        </div>
      ) : (
        <div className="flex gap-2">
          <CardStatistic
            label="Messages"
            desc="Lorem ipsum dolor sit amet consectetur"
            icon={EnvelopeIcon}
          />
          <CardStatistic
            label="Inbox"
            desc="Lorem ipsum dolor sit amet"
            icon={PresentationChartBarIcon}
            colors="bg-[#F26440]"
          />
          <CardStatistic
            label="Product sell"
            desc="Lorem ipsum "
            icon={ShoppingCartIcon}
            colors="bg-[#E6AB35]"
          />
        </div>
      )}
    </div>
  );
};

export default CardWrapper;
