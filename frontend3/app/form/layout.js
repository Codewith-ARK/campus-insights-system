import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

export default function RootLayout({children}) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}
