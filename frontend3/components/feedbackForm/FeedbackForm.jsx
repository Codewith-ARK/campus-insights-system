import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import LinkButton from '../ui/LinkButton'

export default function FeedbackForm() {
  return (
    <div className='px-4 py-6 rounded-2xl flex justify-between border border-gray-700'>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <h1>Title</h1>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint commodi incidunt qui consequuntur sequi.</p>
        </div>
        <LinkButton url={"#"}>
          <p>View Form</p>
        </LinkButton>
      </div>
      <section className='flex flex-col'>
        <div className="space-x-1">
          <div className="badge">2k21</div>
          <div className="badge">CS</div>
        </div>
        <div className='text-sm text-gray-400'>
          16th May 2025
        </div>
        <div>
          <div className="avatar"></div>
          Dr. Dhani Bux Talpur
        </div>
      </section>
    </div>
  )
}
