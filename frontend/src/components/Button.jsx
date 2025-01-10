import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-start">
      <button
        onClick={handleButtonClick}
        className="px-6 py-3 mt-3 font-custom2 font-semibold bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
      >
        Get Start
      </button>
    </div>
  );
}

export default Button;
