'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  return (
    null
  )
}
