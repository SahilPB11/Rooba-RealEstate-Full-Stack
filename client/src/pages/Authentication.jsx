// Authentication.js
import React from "react";
import SignupForm from "../components/UserAuth/SignupForm";

const Authentication = () => {
  // Add this line to prevent scrolling on the entire page
  document.body.style.overflow = "hidden";

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

          {/* Signup Form */}
          <SignupForm />
        </div>
      </div>

      {/* Right Section with Image and Overlay */}
      <div
        className="md:w-1/2 hidden md:block relative"
        style={{ height: "100vh" }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-start m-5 mb-0"> */}
        {/* Content in the overlay */}
        {/* You can add additional content or remove this div based on your needs */}
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg">Discover amazing features...</p>
        </div> */}
        <div className="p-5">
          <img src="./images/rooba4.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
