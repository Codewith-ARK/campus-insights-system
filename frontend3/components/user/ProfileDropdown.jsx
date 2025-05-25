'use client'
import React, { useEffect, useState } from 'react'
import ProfileAvatar from './ProfileAvatar'
import Link from 'next/link'
import axiosClient from '@/lib/axios';
import { useUser } from '@/context/UserContext';
// import axios from 'axios';

export default function ProfileDropdown() {
  const { user, logout, loading } = useUser();

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1 md:py-2 gap-3 hover:bg-black/20 h-fit">
        <div className='hidden md:flex flex-col items-end'>
          <p className='font-extralight text-sm'>Welcome back,</p>
          <p>{user?.first_name}</p>
        </div>
        <ProfileAvatar firstName={user.first_name} lastName={user.last_name} /> 
      </div>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm space-y-1">
        {[{ url: "/profile", text: "Profile" }, { url: "/settings", text: "Settings" }].map((item, index) => (
          <li key={index}><Link href={item.url}>{item.text}</Link></li>
        ))}
        <li><Link className='btn btn-error' href={"/logout"}>Logout</Link></li>
      </ul>
    </div>
  ) // Render nothing if not authenticated
}
