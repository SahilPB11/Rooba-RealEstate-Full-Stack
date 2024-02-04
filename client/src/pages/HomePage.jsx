// HomePage component
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavSidebar from "../components/home/NavSidebar";
import { useAuth } from "../contextApi/useAuth"; // Import your AuthContext path
import TopBar from "../components/TopBar";
import TertiaryNav from "../components/TeritaryNav";

const HomePage = () => {
  const { user } = useAuth(); // Assuming your AuthContext provides user information

  // Redirect to market page after login or when visiting the root ("/")
  const shouldRedirectToMarket = !user || window.location.pathname === "/";

  return (
    <div style={{ display: "flex" }}>
      <NavSidebar />
      <div style={{ flex: 1 }}>
        <TopBar />
        <TertiaryNav />
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
