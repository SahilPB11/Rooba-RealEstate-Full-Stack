// SignUpForm.js
import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isValidPassword(formData.password)) {
        throw new Error(
          "Password must include at least one special character."
        );
      }

      await axios.post("/api/createUser", formData);

      setFormData({
        name: "",
        email: "",
        age: "",
        country: "",
        password: "",
      });
      setErrorMessage("");
      alert("User created successfully!");
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  const isValidPassword = (password) => {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    return specialChars.test(password);
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 bg-transparent text-white rounded-md">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="w-full px-4 py-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="w-full px-4 py-2  border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-700 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Country:
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-700 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            className="w-full px-4 py-2 bg-gray-700 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ backgroundColor: "rgb(39, 57, 61)" }}
          />
        </div>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
