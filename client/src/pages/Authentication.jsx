import React, { useState } from "react";
import SignupForm from "../components/UserAuth/SignupForm";
import LoginForm from "../components/UserAuth/LoginForm";

const Authentication = () => {
  // Add this line to prevent scrolling on the entire page
  document.body.style.overflow = "hidden";

  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prevValue) => !prevValue);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen  text-white"
      style={{ backgroundColor: "rgb(78, 98, 107)" }}
    >
      {/* Left Section with SignUpForm */}
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          {/* Rooba Logo */}
          <div className="mb-6">
            <img src="./logo/logo.svg" alt="Your Logo" className="w-16 h-16" />
          </div>

          {/* Conditional Rendering of Form */}
          {isLoginForm ? <LoginForm /> : <SignupForm />}

          {/* Toggle Button */}

          {isLoginForm ? (
            <p>
              Don't have an account?{" "}
              <span
                className="text-white text-md mb-2 focus:outline-none underline hover:text-blue-300 fw-bolder   "
                onClick={toggleForm}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="text-white text-md mb-2 focus:outline-none underline hover:text-blue-300 fw-bolder"
                onClick={toggleForm}
              >
                Log In
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Right Section with Image and Overlay */}
      <div
        className="md:w-1/2 hidden md:block relative"
        style={{ height: "100vh" }}
      >
        <div className="p-5 opacity-50">
          <img src="./images/rooba.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
