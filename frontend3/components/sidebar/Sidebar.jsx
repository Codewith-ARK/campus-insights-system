'use client'
import React from 'react'
import Link from 'next/link'
import { LuHouse, LuLayoutDashboard, LuSettings, LuSquarePen, LuUserRound } from 'react-icons/lu'
import { useUser } from '@/context/UserContext'
import isAdmin from '@/utils/isAdmin'

export default function Sidebar({ children }) {
  const { user } = useUser();
  const dashboardUrl = isAdmin() ? '/admin/dashboard' : '/dashboard'
  const formUrl = isAdmin() ? '/admin/form' : '/form'

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-900 flex flex-col py-10 px-4 md:px-10">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side border-e border-gray-700">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu justify-between bg-gray-900 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className='space-y-2'>
            <li><Link href={"/"}><LuHouse size={16} strokeWidth={2} /> Home</Link></li>
            <li><Link href={dashboardUrl}><LuLayoutDashboard size={16} strokeWidth={2} /> Dashboard</Link></li>
            <li><Link href={formUrl}><LuSquarePen size={16} strokeWidth={2} /> Forms</Link></li>
            <li><Link href={"/profile"}><LuUserRound size={16} strokeWidth={2} /> Profile</Link></li>
            <li><Link href={"/settings"}><LuSettings size={16} strokeWidth={2} /> Settings</Link></li>
          </div>
          <div>
            {/* bottom option */}
          </div>
        </ul>
      </div>
    </div>)
}


