import React, { useState } from "react";
import axios from "axios";
import PasswordInput from "../PasswordInput";
import { useAuth } from "../../contextApi/useAuth";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/user/login", formData);
      console.log(res);
      if (res.status == 200) login(res);
      setFormData({
        email: "",
        password: "",
      });
      setErrorMessage("");
      alert("Login successful!");
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 bg-transparent text-white rounded-md">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="w-full px-4 py-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
