import React from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contextApi/useAuth";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
// import CartPage from "./pages/CartPage";
// import MarketPage from "./pages/MarketPage";
// import SettingsPage from "./pages/SettingsPage";
// import PageNotFound from "./pages/PageNotFound"; // Import your PageNotFound component

function App() {
  const { user } = useAuth();
  axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
  axios.defaults.withCredentials = true;

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/home" /> : <Authentication />}
      />
      <Route path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />
      <Route path="/cart" element={user ? <CartPage /> : <Navigate to="/" />} />
      {/* <Route
        path="/market"
        element={user ? <MarketPage /> : <Navigate to="/" />}
      />
      <Route
        path="/settings"
        element={user ? <SettingsPage /> : <Navigate to="/" />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/home" /> : <Authentication />}
      />
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
