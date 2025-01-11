import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { TiSocialYoutube, TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <footer className="bg-black/90 text-gray-500">
      <ResponsiveContainer>
        <div className="py-10 lg:py-20 flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Company Info with Logo */}
          <div className="flex items-center space-x-4">
            <img src={"/logo/logo-light.jpg"} alt="Computer Insights System Logo" className="w-24 aspect-square rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">Campus Insights System</h2>
              <p className="text-sm mt-3">Empowering education through technology. Join us to innovate and excel.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm *:link-hover">
              <li>
                <a href="/home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-300">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook size={22} />
              <FaTwitter size={22} />
              <TiSocialLinkedin size={22} />
              <TiSocialYoutube size={22} />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

        </div>
      </ResponsiveContainer>
      {/* Bottom Section */}
      <div className="py-4 border-y border-gray-800 text-center text-sm text-gray-500">
        &copy; 2025 Campus Insights System. All rights reserved.
      </div>
    </footer>

  );
}

export default Footer;
