'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";
import LinkButton from "./LinkButton";
import ProfileDropdown from "../user/ProfileDropdown";
import SidebarToggle from "../sidebar/SidebarToggle";
import useAuthStore from "@/store/useAuthStore";

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
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return (
    <nav className='bg-gray-900 w-full border-b border-gray-700 data-aos="fade-right"'>
      <div className="px-4 md:px-10">
        <div className="flex flex-row-reverse md:flex-row items-center justify-between py-4 md:py-1">
          {/* Logo only, no heading */}
          <SidebarToggle />
          <div className="hidden md:flex items-center">
            <img src={'/logo.png'} alt="Logo" className="h-[64px] aspect-square" />
          </div>

          {/* Desktop Links Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <NavbarLinks />
          </div>
          {isLoggedIn
            ? <ProfileDropdown />
            : <LinkButton url={"/login"}>
              Login
            </LinkButton>
          }

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
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
        <div className="md:hidden bg-transparent transition shadow-md">
          <div className="px-4 py-4 flex flex-col items-center space-y-3">
            <NavbarLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;