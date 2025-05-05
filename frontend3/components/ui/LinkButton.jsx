import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa6'

export default function LinkButton({url, classNames, children}) {
  return (
    <Link href={url} className={`group btn bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all ease-out rounded-full font-medium`}>
      {children}
      <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition ease-out duration-300'/>
    </Link>
  )
}
