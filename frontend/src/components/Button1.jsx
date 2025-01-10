import React from "react";

function Button1() {
  return (
    <div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="group relative w-full sm:w-auto flex justify-center py-2 px-4 sm:py-3 sm:px-6 mt-5 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-teal-400 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Button1;
