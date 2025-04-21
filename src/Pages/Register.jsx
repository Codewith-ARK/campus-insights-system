import React, { useState } from "react";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
    } else {
      setErrorMessage("");
      alert("Registration Successful!");
      // Handle registration logic here
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
            className="w-full p-3 mt-4 bg-emerald-500 text-white font-semibold rounded-xl shadow-md hover:bg-sky-600 transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Link to Login */}
        {/* <div className="text-center mt-5">
          <p className="text-white">
            Already have an account?{" "}
            <Link to="/" className="text-blue-300 hover:underline">
              Login here
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Register;

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       username === "" ||
//       email === "" ||
//       password === "" ||
//       confirmPassword === ""
//     ) {
//       setErrorMessage("Please fill in all fields");
//     } else if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//     } else {
//       setErrorMessage("");
//       // Handle successful registration logic here
//       alert("Registration Successful!");
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-emerald-800  to-sky-800  min-h-screen flex justify-center items-center overflow-hidden">
//       {/* 3D Floating Shapes */}
//       <div className="absolute top-10 left-60 w-32 h-32 bg-cyan-400 rounded-full  opacity-20"></div>
//       <div className="absolute top-20 left-80 w-32 h-32 bg-cyan-400 rounded-full  opacity-20"></div>
//       <div className="absolute top-10 left-60 w-32 h-32 bg-cyan-400 rounded-full  opacity-20"></div>
//       <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-400 rounded-full  opacity-30"></div>

//       {/* Form Box */}
//       <div className="relative z-20 bg-transparent p-8 rounded-2xl shadow-2xl max-w-md w-full">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Create an Account
//         </h2>

//         {/* Error Message */}
//         {errorMessage && (
//           <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//         )}

//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Enter your username"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Create a password"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-gray-600 font-semibold mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Confirm your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//           >
//             Register
//           </button>
//         </form>

//         {/* Login Link */}
//         <div className="text-center mt-4">
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-500 hover:underline">
//               Login here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>