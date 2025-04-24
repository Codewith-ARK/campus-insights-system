import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      setErrorMessage("");
      alert("Login Successful!");
      navigate("/userdashboard"); // ✅ redirect to Home page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-800 to-sky-800 bg-opacity-70 backdrop-blur-sm">
      {/* Login Box */}
      <div className="relative z-20 bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-96">
        {/* Logo Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/Images/Campus-insight-system logo1-01.png" // keep in /public folder
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
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-white rounded-lg text-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-white rounded-lg text-white"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-cyan-600"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-white">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;