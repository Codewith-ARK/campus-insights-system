import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo/CIS logo1.png";

function Navbar() {
  return (
    <div className="">
      <header className="bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-lg ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="CIS Logo" className="w-12 h-12 mr-4" />
            <div className="text-white font-bold text-2xl">
              <h1 className="font-custom2">CAMPUS INSIGHTS SYSTEM</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-1xl font-bold">
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
