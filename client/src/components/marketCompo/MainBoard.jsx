import React from "react";

import ThemePark from "./ThemePark";
import Overview from "./Overview";

const MainBoard = () => {
  return (
    <div className="w-full p-4 lg:p-10 border border-gray-300">
      <div className="w-2/4 text-sm mb-4 text-gray-300">
        <div className="flex flex-col lg:flex-row justify-around">
          <p className="mb-2 lg:mb-0">
            Market <img src="./logo/arrow.svg" alt="" />
          </p>
          <p className="mb-2 lg:mb-0">
            Category <img src="./logo/arrow.svg" alt="" />
          </p>
          <p className="mb-2 lg:mb-0">
            Theme Park Site <img src="./logo/arrow.svg" alt="" />
          </p>
        </div>
      </div>
      <div className="mb-4">
        <img
          src="./images/land.jpg" // Replace with the actual source of your image
          alt="Your Alt Text"
          className="w-full h-auto lg:h-[371px] xl:h-[371px]" // Responsive height for big screens
        />
      </div>
      {/* theme park site */}
      <ThemePark />
      {/* Overview Part */}
      <Overview />
    </div>
  );
};

export default MainBoard;
