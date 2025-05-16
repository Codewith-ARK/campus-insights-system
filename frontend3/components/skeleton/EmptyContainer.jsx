import React from 'react'
import { LuInbox } from 'react-icons/lu'

export default function EmptyContainer({label}) {
  return (
    <div className='h-[280px] flex justify-center items-center flex-col gap-4'>
      <LuInbox size={24}/>
      <p className='text-gray-400'>
      {label}
      </p>
    </div>
  )
}
