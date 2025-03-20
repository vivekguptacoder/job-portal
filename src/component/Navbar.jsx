import React, { useState } from "react";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="text-xl font-bold">
        <a href="/">HUNT THE CAREER</a>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex space-x-8 items-center">
        {/* Features Dropdown */}
        <div className="relative">
          <button
            onClick={toggleFeaturesDropdown}
            className="hover:text-gray-300 focus:outline-none"
          >
            Features
          </button>
          {isFeaturesOpen && (
            <div className="absolute bg-blue-800 mt-2 py-2 w-48 rounded-lg shadow-lg">
              <a href="/hunter-pilot" className="block px-4 py-2 hover:bg-blue-700">
                Hunter Pilot
              </a>
              <a href="/ai-reels" className="block px-4 py-2 hover:bg-blue-700">
                AI Reels
              </a>
              <a href="/resume-maker" className="block px-4 py-2 hover:bg-blue-700">
                Resume Maker
              </a>
              <a href="/referrals" className="block px-4 py-2 hover:bg-blue-700">
                Referrals
              </a>
              <a href="/alumni-connect" className="block px-4 py-2 hover:bg-blue-700">
                Alumni Connect
              </a>
              <a href="/govt-job" className="block px-4 py-2 hover:bg-blue-700">
                Govt Job
              </a>
            </div>
          )}
        </div>

      
        <a href="/tools" className="hover:text-gray-300">
          Tools
        </a>
        <a href="/resume-ai" className="hover:text-gray-300">
          Resume AI
        </a>
        <a href="/for-employer" className="hover:text-gray-300">
          For Employer
        </a>
        <a href="/about-us" className="hover:text-gray-300">
          About Us
        </a>
        <a href="/blog" className="hover:text-gray-300">
          Blog
        </a>
      </div>

      {/* Right Side: Login and Sign Up Buttons */}
      <div className="flex space-x-4">
        <a
          href="/login"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Log In
        </a>
        <a
          href="/signup"
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
