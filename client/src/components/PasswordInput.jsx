import React, { useState } from "react";

const PasswordInput = ({ label, name, value, onChange, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-400 text-sm font-bold mb-2">
        {label}:
      </label>
      <input
        className="w-full px-4 py-2 bg-gray-700 border-b border-gray-500 focus:outline-none focus:border-blue-500 text-white"
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{ backgroundColor: "rgb(39, 57, 61)" }}
      />
      {/* Text to toggle password visibility */}
      <span
        className="absolute right-4 top-8 cursor-pointer text-blue-500"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? "Hide" : "Show"}
      </span>
    </div>
  );
};

export default PasswordInput;
