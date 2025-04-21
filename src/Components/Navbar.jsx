import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-800   w-full z-10 shadow-2xl ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="font-Montserrat  text-2xl font-bold text-cyan-100">
              CAMPUS INSIGHTS SYSTEM
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className=" text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat"
            >
              HOME
            </a>
            <a
              href="/about"
              className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat "
            >
              ABOUT
            </a>
            <a
              href="/services"
              className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat "
            >
              SERVICES
            </a>
            <a
              href="/contact"
              className="text-cyan-100 font-bold hover:text-cyan-500 transition font-Montserrat "
            >
              CONTACT
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
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
            <a
              href="/"
              className="block text-gray-600 hover:text-gray-800 transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-600 hover:text-gray-800 transition"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-gray-600 hover:text-gray-800 transition"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-gray-600 hover:text-gray-800 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
