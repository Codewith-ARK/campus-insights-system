import React from "react";
import Logo from "../assets/Logo/CIS logo2.jpg";

function Footer() {
  return (
    <footer className="bg-sky-800 text-sky-200">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Company Info with Logo */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="CIS Logo" className="w-32 h-32 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">Campus Insights System</h2>
              <p className="mt-2 text-gray-200">
                Empowering education through technology. Join us to innovate and
                excel.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.418 3.582 8.094 8.097 8.777v-6.222h-2.375v-2.555h2.375v-1.895c0-2.349 1.394-3.633 3.524-3.633.999 0 2.055.075 2.055.075v2.375h-1.158c-1.144 0-1.501.709-1.501 1.434v1.644h2.875l-.46 2.555h-2.415v6.222c4.515-.683 8.097-4.359 8.097-8.777 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.34.24a9.18 9.18 0 0 1-2.92 1.11 4.53 4.53 0 0 0-7.86 3.1 4.52 4.52 0 0 0 .12 1.03A12.94 12.94 0 0 1 1.67 1.17a4.48 4.48 0 0 0-.61 2.28A4.5 4.5 0 0 0 3.31 7.75 4.52 4.52 0 0 1 .9 7.05v.06a4.53 4.53 0 0 0 3.63 4.42 4.41 4.41 0 0 1-2.06.08 4.53 4.53 0 0 0 4.22 3.15A9.08 9.08 0 0 1 .42 18.2a12.92 12.92 0 0 0 7 2.05c8.4 0 13-6.96 13-13a13.1 13.1 0 0 0-.01-.58A9.3 9.3 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-200">
          © 2025 Campus Insights System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
