import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    
    <footer className="relative bg-slate-900 text-cyan-600 py-16 overflow-hidden ">
      {/* Background Shapes */}
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20 rounded-full transform translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent opacity-30 rounded-full transform translate-x-[50%] translate-y-[-50%]"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-cyan-400 to-transparent opacity-40 rounded-full transform translate-y-[50%]"></div>
   
  
     


       {/* <div className="w-64 h-40 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:rotate-6 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Interactive 3D Card</h3>
        <p className="text-sm text-gray-600">Hover to see the effect!</p>
      </div>
    </div> */}
  


      {/* Footer Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
         
          <div>
            <h2 className="text-2xl font-bold mb-4 text-sky-500">Campus Insights System</h2>
            <p className="text-gray-400">
              Simplifying campus management and enhancing student experiences
              through innovative solutions and modern design.
            </p>
          </div>
          <div className="mr-12 border-r border-cyan-400"></div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 right-10">Quick Links</h3>
            <ul className="space-y-3">
              <li>
              <Link
      to="/"
      className="hover:text-cyan-700 transition duration-300"
    >
      Home
    </Link>
              </li>
              <li>
              <Link
      to="/feedback"
      className="hover:text-cyan-700 transition duration-300"
    >
      Feedback
    </Link>
              </li>
              <li>
              <Link
      to="/about"
      className="hover:text-cyan-700 transition duration-300"
    >
      About Us
    </Link>
              </li>
              <li>
              <Link
      to="/contact"
      className="hover:text-cyan-700 transition duration-300"
    >
      Contact
    </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-cyan-400"></div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Campus Insights. All rights
            reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
