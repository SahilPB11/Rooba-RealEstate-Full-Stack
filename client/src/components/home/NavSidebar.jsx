import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contextApi/useAuth";
import axios from "axios";

const NavItem = ({ to, label, onClick }) => (
  <Link
    to={`${to}`}
    onClick={onClick}
    className="w-full h-36 flex items-center justify-center border border-gray-300"
    activeClassName="active"
  >
    {label}
  </Link>
);

const NavSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await axios.get("/user/logout");
    console.log(res);
    if (res.status === 200) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col bg-white md:w-64 lg:w-80">
      <div className="w-full h-48 flex items-center justify-center border border-gray-300">
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
