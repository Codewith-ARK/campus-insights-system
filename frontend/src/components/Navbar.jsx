import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/Logo/CIS logo1.png";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <div className="">
      <header className="bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-lg ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to={"/"}
          >
            <div className="flex items-center">
              <img src={Logo} alt="CIS Logo" className="w-12 h-12 mr-4" />
              <div className="text-white font-bold text-2xl">
                <h1 className="text-base lg:text-2xl uppercase font-medium lg:font-bold">Campus Insights System</h1>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-1xl font-bold">
            {[
              { text: "Home", address: "/" },
              { text: "About", address: "/about" },
              { text: "Contact", address: "/contact" },
              { text: "Login", address: "/login" },
            ]
              .map((item, index) => (
              <Link
                to={item.address}
                className="link no-underline hover:text-gray-500 text-white transition-colors"
                key={index}
              >
                {item.text}
              </Link>))
            }
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <HiMenuAlt3 size={22} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
