import Link from 'next/link'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

export default function AdminActionCard({ url, title, description, icon, isDisabled }) {
  return (
    <Link href={url ? url : "#"} disabled={isDisabled ? "disabled" : ""}>
      <div className='group py-8 px-4 flex justify-between gap-2 items-center bg-emerald-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-emerald-300 dark:hover:bg-white/10 hover:ring-1 cursor-pointer hover:border-gray-600 transition'>
        <div>
          <h4 className='mb-3 font-medium dark:text-neutral-300 flex gap-1 group-hover:gap-2 items-center transition-normal duration-100 cursor-pointer'>
            {title}
            <LuArrowRight size={18} />
          </h4>
          <p className='text-sm text-neutral-500 dark:text-neutral-400'>{description}</p>
        </div>
        <div className='p-3 bg-emerald-400 dark:bg-emerald-500 rounded-full'>
          {icon}
        </div>
      </div>
    </Link>
  )
}
