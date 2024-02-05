// TertiaryNav component
import React from "react";
import { Link } from "react-router-dom";

const TertiaryNav = () => {
  return (
    <div
      className="border border-gray-300"
      style={{
        width: "calc(100% - 10px)", // Adjust width based on NavSidebar width
        height: "102px",
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 60px",
      }}
    >
      {/* Tertiary navigation text */}
      <Link to="/tertiary-link" className="tertiary-link">
        Choose your new site
      </Link>
      <div className="flex w-1/6 justify-between items-center">
        <div className="flex justify-center items-center border-b-2 border-black">
          <img src="./logo/terit.svg" alt="" className="w-2" />
          <div className="w-2 ml-1">1</div>
        </div>
        <div className="flex justify-center items-center border-b-2 border-black">
          <div className="w-5 text-center">2</div>
        </div>
        <div className="flex justify-center items-center border-b-2 border-black">
          <div className="w-5 text-center">3</div>
        </div>
      </div>
    </div>
  );
};

export default TertiaryNav;
