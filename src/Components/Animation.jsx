import React from "react";

function Animation() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="relative w-24 h-24 transform-style-preserve-3d animate-rotate-cube">
        <div className="face front bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="face back bg-gradient-to-r from-red-400 to-yellow-500"></div>
        <div className="face right bg-gradient-to-r from-green-400 to-blue-500"></div>
        <div className="face left bg-gradient-to-r from-pink-400 to-red-500"></div>
        <div className="face top bg-gradient-to-r from-orange-400 to-yellow-500"></div>
        <div className="face bottom bg-gradient-to-r from-purple-400 to-indigo-500"></div>
      </div>
    </div>
  );
}

export default Animation;
