import React from 'react'

export default function StatCard({ label, value, outcome, icon }) {
  return (
    <div className='py-8 px-4 flex flex-col-reverse md:flex-row gap-3 justify-between border border-gray-700 rounded-xl'>
      <div>
        <h4 className='text-sm'>{label}</h4>
        <p className='text-2xl font-bold'>{value}</p>
        <p className='flex gap-1 items-center text-green-400'>{outcome}</p>
      </div>
      <div className=''>
        {icon}
      </div>
    </div>
  )
}
