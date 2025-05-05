import React from 'react'

export default function PageContainer({ children }) {
  return (
    <section className='px-4 md:px-10 lg:px-20'>
      {children}
    </section>
  )
}
