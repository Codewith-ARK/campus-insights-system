import LinkButton from '@/components/ui/LinkButton'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='h-[80vh] w-full flex flex-col justify-center items-center gap-4'>
      <h1 className='text-4xl font-medium'>Unauthorized</h1>
      <p>You are not authorized to view this page.</p>
      <LinkButton url={"/dashboard"}>
        To Dashboard
      </LinkButton>
    </div>
  )
}
