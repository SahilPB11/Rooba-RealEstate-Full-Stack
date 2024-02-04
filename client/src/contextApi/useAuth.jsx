// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from cookies or local storage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);

      // Set Axios default headers upon user login
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.cookies}`;
    }
  }, []);

  const login = (userData, setAxiosHeaders = true) => {
    // Save user data in cookies or local storage
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    // Set Axios default headers upon user login if setAxiosHeaders is true
    if (setAxiosHeaders) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.cookies}`;
    }
  };

  const logout = () => {
    // Clear cookies or local storage
    localStorage.removeItem("user");
    setUser(null);

    // Clear Axios default headers upon user logout
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
