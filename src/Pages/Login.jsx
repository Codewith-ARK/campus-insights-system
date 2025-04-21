import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      setErrorMessage("");
      // Handle successful login logic here
      alert("Login Successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-800 to-sky-800 bg-opacity-70 backdrop-blur-sm">
      {/* 3D floating shapes */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center space-x-4 opacity-20">
        <div className="w-48 h-48 bg-cyan-500 rounded-full "></div>
        <div className="w-64 h-64 bg-teal-500 rounded-full "></div>
      
      </div>

      {/* Login Box */}
      <div className="relative z-20 bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-96">
       
        {/* Logo Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/public/Images/Campus-insight-system logo1-01.png" // Replace with your logo path
            alt="Logo"
            className="h-24 w-auto bg-white rounded-full"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-white rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-white rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-white">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
