// TopBar component with a button
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const TopBar = () => {
  return (
    <div
      className="border border-gray-300"
      style={{
        width: "calc(100%)", // Adjust width based on NavSidebar width
        height: "107px",
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 50px",
        // backgroundColor: "rgba(67, 117, 251, 1)",
      }}
    >
      {/* Button with the specified styles */}
      <Link to="/complete-profile" className="buttonStyles">
        Complete Profile
      </Link>
      <img src="./logo/ring.svg" alt="" className="w-5" />
    </div>
  );
};

export default TopBar;
