import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-800 w-full z-10 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-Montserrat text-2xl font-bold text-cyan-100">
              CAMPUS INSIGHTS SYSTEM
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              HOME
            </Link>
            <Link to="/feedback" className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              FEEDBACK
            </Link>
            <Link to="/about" className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              ABOUT
            </Link>
            <Link to="/contact" className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              CONTACT
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              Home
            </Link>
            <Link to="/about" className="block text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              About
            </Link>
            <Link to="/feedback" className="block text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              Feedback
            </Link>
            <Link to="/contact" className="block text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;