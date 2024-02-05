import React from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contextApi/useAuth";
import Authentication from "./pages/Authentication"; // Import the updated Authentication component
import CartPage from "./pages/CartPage";
import MarketPage from "./pages/MarketPage";
import SettingsPage from "./pages/SettingsPage";
import PageNotFound from "./pages/PageNotFound";
import NavSidebar from "./components/home/NavSidebar"; // Import the NavSidebar component

function App() {
  const { user } = useAuth();
  axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
  axios.defaults.withCredentials = true;

  return (
    <div className="flex">
      {user && <NavSidebar />}{" "}
      {/* Render NavSidebar only if the user is authenticated */}
      <div className={user ? "flex-grow" : "w-full"}>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/market" /> : <Authentication />}
          />
          <Route
            path="/cart"
            element={user ? <CartPage /> : <Navigate to="/" />}
          />
          <Route
            path="/market"
            element={user ? <MarketPage /> : <Navigate to="/" />}
          />
          <Route
            path="/settings"
            element={user ? <SettingsPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
