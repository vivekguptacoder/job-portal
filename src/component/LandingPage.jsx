import React from "react";
import heroImage from "../assests/hero-image.jpg"; // Import the image

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      
      {/* <nav className="bg-blue-900 text-white p-4 flex justify-between items-center"> */}
        {/* <div className="text-xl font-bold">
          <a href="/">HUNT THE CAREER</a>
        </div> */}
        {/* <div className="flex space-x-4">
          <a href="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Log In
          </a>
          <a href="/signup" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            Sign Up
          </a>
        </div> */}
      {/* </nav> */}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 space-y-6 animate-fadeIn">
          <h1 className="text-5xl font-bold text-blue-900">
            Find Your Dream Job in <span className="text-purple-600">Less Than 1 Minute</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Join the #1 platform for job seekers. Get matched with the best opportunities tailored to your skills and experience.
          </p>
          <div className="flex space-x-4">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="/features"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slideIn">
          <img
            src={heroImage}
            alt="Job Search"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Why Choose Hunt The Career?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Our advanced AI matches you with the best jobs based on your skills and preferences.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Fast & Easy</h3>
              <p className="text-gray-600">
                Get job recommendations in less than 1 minute. No hassle, no delays.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Trusted by Thousands</h3>
              <p className="text-gray-600">
                Join thousands of job seekers who found their dream jobs through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;