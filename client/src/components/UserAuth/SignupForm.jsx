// SignUpForm.js
import React, { useState } from "react";
import axios from "axios";
import { worldCountries, isValidPassword } from "../../assets/data";

const formFields = [
  { name: "Name", type: "text", key: "name" },
  { name: "Email", type: "email", key: "email" },
  { name: "Age", type: "number", key: "age" },
  {
    name: "Country",
    type: "select",
    key: "country",
    options: [
      "Select Country",
      ...worldCountries,
      // Add more countries as needed
    ],
  },
  { name: "Password", type: "password", key: "password" },
];

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

      const res = await axios.post("user/signup", formData);
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

  return (
    <div className="max-w-md w-full mx-auto p-4 bg-transparent text-white rounded-md">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div className="mb-4" key={field.key}>
            <label className="block text-gray-400 text-sm font-bold mb-2">
              {field.name}:
            </label>
            {field.type === "select" ? (
              <select
                className="w-full px-4 py-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white scroll"
                name={field.key}
                value={formData[field.key]}
                onChange={handleChange}
                required={field.type === "password"}
                style={{ backgroundColor: "rgb(39, 57, 61)" }}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="w-full px-4 py-2 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
                type={field.type}
                name={field.key}
                value={formData[field.key]}
                onChange={handleChange}
                required={field.type === "password"}
                style={{ backgroundColor: "rgb(39, 57, 61)" }}
              />
            )}
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
