import React, { useEffect } from "react";
import TopBar from "../components/marketCompo/TopBar";

const SettingsPage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <TopBar />
      <div className="container mx-auto p-4 sm:p-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-8">Account Settings</h1>

        <div className="max-w-md mx-auto bg-white p-4 sm:p-8 border rounded shadow-lg">
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="text-gray-700 font-semibold block mb-2"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-full border p-2 rounded"
              placeholder="Enter your current password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="text-gray-700 font-semibold block mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full border p-2 rounded"
              placeholder="Enter your new password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 font-semibold block mb-2"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border p-2 rounded"
              placeholder="Confirm your new password"
            />
          </div>

          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Save Changes
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Additional Options</h2>

          <p className="text-gray-700 mb-2">
            You can explore additional settings and options here.
          </p>
          {/* Add more sections or options as needed */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
