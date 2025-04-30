import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; 
import logo from "../../public/Images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-10 bg-gray-900" data-aos="fade-right">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo only, no heading */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Links Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/" className="text-emerald-400 font-semibold hover:text-emerald-600 transition-all font-Montserrat">
              HOME
            </Link>
            <Link to="/feedback" className="text-emerald-400 font-semibold hover:text-emerald-600 transition-all font-Montserrat">
              FEEDBACK
            </Link>
            <Link to="/about" className="text-emerald-400 font-semibold hover:text-emerald-600 transition-all font-Montserrat">
              ABOUT
            </Link>
            <Link to="/contact" className="text-emerald-400 font-semibold hover:text-emerald-600 transition-all font-Montserrat">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-slate-500 shadow-md">
          <div className="px-4 py-4 flex flex-col items-center space-y-3">
            <Link to="/" className="text-pink-600 font-semibold hover:text-pink-700 transition-all font-Montserrat">
              HOME
            </Link>
            <Link to="/feedback" className="text-pink-600 font-semibold hover:text-pink-700 transition-all font-Montserrat">
              FEEDBACK
            </Link>
            <Link to="/about" className="text-pink-600 font-semibold hover:text-pink-700 transition-all font-Montserrat">
              ABOUT
            </Link>
            <Link to="/contact" className="text-pink-600 font-semibold hover:text-pink-700 transition-all font-Montserrat">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;