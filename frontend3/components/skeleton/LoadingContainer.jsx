import React from 'react'

export default function LoadingContainer({isLoading}) {
  return (
    <div className={`${isLoading ? "flex" : "hidden" } justify-center items-center absolute w-full h-full z-50 bg-gray-900`}>
      <span className='loading loading-spinner'></span>
    </div>
  )
}
