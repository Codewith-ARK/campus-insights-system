import Feature from '@/components/home/Feature'
import Hero from '@/components/home/Hero'
import Supervisor from '@/components/home/Supervisor'
import Team from '@/components/home/Team'
import React from 'react'

export default function page() {
  return (
    <div className='bg-base-100 dark:bg-gray-900 dark:text-white overflow-x-hidden'>
      <Hero />
      <Feature />
      <Supervisor />
      <Team />
    </div>
  )
}
