// HomePage component
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavSidebar from "../components/home/NavSidebar";
import { useAuth } from "../contextApi/useAuth"; // Import your AuthContext path

const HomePage = () => {
  const { user } = useAuth(); // Assuming your AuthContext provides user information

  // Redirect to market page after login or when visiting the root ("/")
  const shouldRedirectToMarket = !user || window.location.pathname === "/";

  return (
    <div>
      {shouldRedirectToMarket && <Navigate to="/home/market" />}
      <NavSidebar />
      <Outlet />
    </div>
  );
};

export default HomePage;
