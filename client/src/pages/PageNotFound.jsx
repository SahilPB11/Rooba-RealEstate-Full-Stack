import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <img
          src="/images/notfound.jpg" // Replace with your custom image or icon
          alt="Page Not Found"
          className="max-w-full h-auto"
        />
        <p className="text-gray-600 mt-8">
          Return to{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
