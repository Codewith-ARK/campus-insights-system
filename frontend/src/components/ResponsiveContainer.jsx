import React from 'react'

export default function ResponsiveContainer({children}) {
  return (
    <div className='px-4 md:px-20 lg:px-40'>
      {children}
    </div>
  )
}
