'use client'
import { Outfit } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";
import LinkButton from "./LinkButton";

function NavbarLinks() {
  return (<>
    <Link href="/" className="text-emerald-400 font-black hover:text-emerald-600 transition-all font-Montserrat">
      HOME
    </Link>
    <Link href="/about" className="text-emerald-400 font-black hover:text-emerald-600 transition-all font-Montserrat">
      ABOUT
    </Link>
    <Link href="/contact" className="text-emerald-400 font-black hover:text-emerald-600 transition-all font-Montserrat">
      CONTACT
    </Link>
  </>)
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-gray-900 w-full data-aos="fade-right"'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          {/* Logo only, no heading */}
          <div className="flex items-center">
            <img src={'/logo.png'} alt="Logo" className="h-[64px] aspect-square" />
          </div>

          {/* Desktop Links Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <NavbarLinks />
          </div>
          <LinkButton url={"/login"}>
            Login
          </LinkButton>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-slate-500 shadow-md">
          <div className="px-4 py-4 flex flex-col items-center space-y-3">
            <NavbarLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;