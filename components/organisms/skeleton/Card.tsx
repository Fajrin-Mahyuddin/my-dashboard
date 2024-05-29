import React from "react";

const SkeletonCard = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className="border shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse gap-4 flex flex-col items-end">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="h-2 w-full bg-slate-700 rounded "></div>
        <div className="h-2 w-full bg-slate-700 rounded "></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
