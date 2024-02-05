import React from "react";

import ThemePark from "./ThemePark";

const MainBoard = () => {

  return (
    <div className="w-full p-10 border border-gray-300">
      <div className="w-1/4 text-sm mb-4 text-gray-300">
        <div className="flex justify-around">
          <p className="flex ">
            Market <img src="./logo/arrow.svg" alt="" srcset="" />
          </p>
          <p className="flex ">
            Category <img src="./logo/arrow.svg" alt="" srcset="" />
          </p>
          <p className="flex ">
            Theme Park Site <img src="./logo/arrow.svg" alt="" srcset="" />
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
    </div>
  );
};

export default MainBoard;
