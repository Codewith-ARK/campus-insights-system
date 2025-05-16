import React from 'react'

export default function SectionHeader({title, subtitle, description}) {
  return (
    <section id='header' className='mb-6 p-6 bg-gray-800 border border-gray-700 rounded-xl'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-gray-400'>{subtitle}</p>
      <p className='text-gray-400'>{description}</p>
    </section>
  )
}
