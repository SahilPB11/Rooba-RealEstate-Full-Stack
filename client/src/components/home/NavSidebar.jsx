import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contextApi/useAuth"; // Update this with the correct path to your AuthContext

const NavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="w-full h-36 flex items-center justify-center border border-gray-300"
  >
    {label}
  </Link>
);

const NavSidebar = () => {
  const { logout } = useAuth(); // Assuming you have a logout function in your AuthContext
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any additional cleanup or actions before logging out if needed
    logout();
    // Redirect to the login page after logout (update the path accordingly)
    // You can use a history object or a routing library for navigation
    navigate("/");
  };

  return (
    <div
      className="flex flex-col bg-white p-1"
      style={{ width: "320px", height: "1020px" }}
    >
      <div className="w-full h-48 flex items-center justify-center border border-orange-300">
        {/* Logo or content for Property 1 */}
        <img src="./logo/logo.svg" alt="" />
      </div>
      <div className="flex-grow">
        <NavItem to="/cart" label="Cart" />
        <NavItem to="/market" label="Market" />
        <NavItem to="/settings" label="Settings" />
        <NavItem label="Logout" onClick={handleLogout} />
        <div className="w-full h-full flex items-center justify-center border border-gray-300"></div>
      </div>
    </div>
  );
};

export default NavSidebar;
