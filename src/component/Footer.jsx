import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Hunt The Career</h3>
            <p className="text-gray-300">
              Your ultimate platform to find the perfect job. We connect job seekers with top employers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-gray-300 hover:text-white transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="/tools" className="text-gray-300 hover:text-white transition duration-300">
                  Tools
                </a>
              </li>
              <li>
                <a href="/resume-ai" className="text-gray-300 hover:text-white transition duration-300">
                  Resume AI
                </a>
              </li>
              <li>
                <a href="/for-employer" className="text-gray-300 hover:text-white transition duration-300">
                  For Employers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: support@huntthecareer.com</li>
              <li className="text-gray-300">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-300">Address: 123 Job Street, Career City, World</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300">
              Get the latest job updates and career tips directly in your inbox.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Hunt The Career. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;