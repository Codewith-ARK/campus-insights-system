'use client'
import React from 'react'
import Link from 'next/link'
import { LuFileChartColumnIncreasing, LuHouse, LuLayoutDashboard, LuSettings, LuSquarePen, LuUserRound } from 'react-icons/lu'
import { usePathname } from 'next/navigation'
import useAuthStore from '@/store/useAuthStore'

export default function Sidebar({ children }) {
  const currentPath = usePathname();
  const user = useAuthStore(state => state.user);

  const dashboardUrl = user?.role != 'student' ? '/admin/dashboard' : '/dashboard'
  const formUrl = user?.role != 'student' ? '/admin/form' : '/form'

  const navigationItems = [
    { href: '/', icon: LuHouse, label: 'Home' },
    { href: dashboardUrl, icon: LuLayoutDashboard, label: 'Dashboard' },
    { href: formUrl, icon: LuSquarePen, label: 'Forms' },
    {
      href: '/admin/feedback',
      icon: LuFileChartColumnIncreasing,
      label: 'Feedbacks',
      adminOnly: true
    },
    { href: '/profile', icon: LuUserRound, label: 'Profile' },
    { href: '/settings', icon: LuSettings, label: 'Settings' },
  ];

  const NavLink = ({ href, icon: Icon, label }) => (
    <li>
      <Link
        href={href}
        className={currentPath === href ? "bg-gray-300 dark:bg-gray-800 dark:text-white" : ""}
      >
        <Icon size={16} strokeWidth={2} /> {label}
      </Link>
    </li>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content bg-neutral-100 dark:bg-gray-900 flex flex-col py-10 px-4 md:px-10">
        {children}
      </div>

      <div className="drawer-side border-e border-gray-300 dark:border-gray-700">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <ul className="menu justify-between bg-white dark:bg-gray-900 text-base-content min-h-full w-80 p-4">
          <div className='space-y-2'>
            {navigationItems.map((item) => (
              !item.adminOnly || user?.role != 'student' ? (
                <NavLink key={item.href} {...item} />
              ) : null
            ))}
          </div>

          <div>
            {/* bottom option */}
          </div>
        </ul>
      </div>
    </div>
  )
}


