import React from 'react'

export default function CustomBadge({value}) {
  return (
    <div className="badge badge-sm uppercase bg-gray-700 text-gray-300">{value}</div>
  )
}
