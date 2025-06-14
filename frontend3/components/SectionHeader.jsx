import React from 'react'

export default function SectionHeader({ title, subtitle, description, children }) {
  return (
    <section id='header' className='relative mb-6 p-6 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-gray-500 dark:text-gray-400'>{subtitle}</p>
      {description &&
        <p className='text-gray-500 dark:text-gray-400 pt-6'>{description}</p>
      }
      {children}
    </section>
  )
}
