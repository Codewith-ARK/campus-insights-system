import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-emerald-400 py-16 overflow-hidden">
      
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-6rem] left-[-6rem] w-72 h-72 bg-emerald-400 rounded-full opacity-20 "></div>
        <div className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-emerald-400 rounded-full opacity-20 "></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-emerald-400">Campus Insights</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering campuses with modern, intelligent management systems
              built for the future of education.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:bg-emerald-600 p-2 rounded-full transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:bg-emerald-600 p-2 rounded-full transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:bg-emerald-600 p-2 rounded-full transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:bg-emerald-600 p-2 rounded-full transition-all">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center">
            <div className="border-l border-emerald-600 h-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-600">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="relative group text-sm hover:text-emerald-600 transition"
                >
                  <span className="group-hover:underline">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="relative group text-sm hover:text-emerald-600 transition"
                >
                  <span className="group-hover:underline">Feedback</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative group text-sm hover:text-emerald-600 transition"
                >
                  <span className="group-hover:underline">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative group text-sm hover:text-emerald-600 transition"
                >
                  <span className="group-hover:underline">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-emerald-500 pt-6 text-center">
          <p className="text-xs text-gray-500 tracking-wider">
            &copy; {new Date().getFullYear()} Campus Insights. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;