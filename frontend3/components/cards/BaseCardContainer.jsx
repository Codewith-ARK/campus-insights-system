import React from 'react'

export default function BaseCardContainer({ children, className }) {
  return (
    <div className={`
        group py-8 px-4 rounded-xl
        bg-gray-200
      dark:bg-gray-800 dark:border-gray-700 transition${className}
        border border-gray-300
    `}>
      {children}
    </div>
  )
}
