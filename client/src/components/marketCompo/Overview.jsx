import React from "react";
import Overview1 from "./Overview/Overview1";
import Overview2 from "./Overview/Overview2";

const Overview = () => {
  return (
    <div className="w-full flex  border border-gray-300">
      <div className="w-1/2 border border-gray-300">
        <Overview1 />
      </div>
      <div className="w-1/2 border border-gray-300">
        <Overview2 />
      </div>
    </div>
  );
};

export default Overview;
