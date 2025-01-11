import React from "react";
import Image from "../assets/Images/v.webp";
import Button3 from "../components/Button3";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Register() {
  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen flex items-center justify-center bg-cyan-500 p-4">
          <div className="w-full max-w-3xl bg-gray-600 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="hidden md:flex md:w-1/2">
              <img
                src={Image}
                alt="Registration Illustration"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-center text-cyan-400 mb-4">
                Create Your Account
              </h2>
              <form className="space-y-4  text-cyan-400 border-cyan-300 focus:ring-teal-400 focus:border-cyan-600">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cyan-400"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-3 py-2 text-gray-500 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border text-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium "
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2  text-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium "
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    className="mt-1 block w-full px-3 py-2 text-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="*:w-full">
    <Button address={"/register"}>Register</Button>

                </div>
              </form>
              <div className="text-cyan-500 text-sm flex gap-2 justify-center items-center mt-4">
                <p className="text-center text-sm">Already have an account?</p>
                <Link className="link" to={"/login"}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Register;
