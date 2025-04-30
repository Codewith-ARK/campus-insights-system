import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      setErrorMessage("");
      alert("Registration Successful!");
      navigate("/login"); // ✅ redirect to Home page
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-700 via-sky-700 to-cyan-900 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 "></div>
     
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 "></div>

      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-800 rounded-full mix-blend-multiply  opacity-30 "></div>
  
      <div className="absolute bottom-1/3 right-1/2 w-96 h-96 bg-sky-800 rounded-full mix-blend-multiply  opacity-30 "></div>
      {/* Register Box */}
      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-xl shadow-2xl p-10 rounded-3xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        {/* Logo (Optional) */}
        <div className="flex justify-center mb-6">
          <img src="/public/Images/Campus-insight-system logo1-01.png" alt="Logo" className="h-28 w-auto bg-white rounded-full" />
        </div>

        <h2 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Register
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-white font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full p-3 rounded-xl border border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full p-3 rounded-xl border border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full p-3 rounded-xl border border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-sky-600 transition-all duration-300"
          >
            Register
          </button>
        </form>

        
        <div className="text-center mt-4">
          <p className="text-white">
          Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
