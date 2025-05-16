import React from 'react'

export default function Button({ children, onClickHandler, className, usePrimaryColor }) {
  return (
    <button
      onClick={onClickHandler}
      className={`btn rounded-full ${usePrimaryColor ? "bg-emerald-500 hover:bg-emerald-700" : ""} ${className}`}>
      {children}
    </button>
  )
}
