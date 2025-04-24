import React from "react";
import Logo from "../assets/Logo/CIS logo2.jpg";
import Image from "../assets/Images/Teachers.png";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-cyan-500 p-4">
        <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="hidden md:flex md:w-1/2 bg-cyan-700">
            <img
              src={Image}
              alt="Login Illustration"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col justify-center w-full md:w-1/2 p-6 bg-gray-700">
            <div className="mx-auto w-full max-w-md">
              <img
                src={Logo}
                alt="Company Logo"
                className="mx-auto h-20 w-auto rounded-full"
              />
              <h1 className="mt-6 text-center text-3xl font-bold text-cyan-400">
                Campus Insights System
              </h1>
              <p className="mt-2 text-center text-sm text-cyan-400">
                Sign in to your account
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-3 *:w-full">
                  <Button address={"/login"}>Login</Button>
                </div>
              </div>
            </form>

            <div className="text-teal-400 text-sm flex gap-1 justify-center items-center mt-4">
              <p className="text-center text-sm">Already have an account?</p>
              <Link className="link link-hover font-semibold" to={"/register"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
