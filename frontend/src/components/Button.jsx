import React from "react";
import { Link } from "react-router-dom";

function Button({ address, children }) {
  return (
    <Link
      to={address}
      className="btn bg-teal-600 hover:bg-teal-700 text-white border-0"
    >
      {children ? children : "Button"}
    </Link>
  );
}

export default Button;
