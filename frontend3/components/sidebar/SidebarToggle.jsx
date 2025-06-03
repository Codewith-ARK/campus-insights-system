import React from 'react'
import { LuMenu } from "react-icons/lu";

export default function SidebarToggle() {
  return (
    <label htmlFor="my-drawer-2" className="btn bg-emerald-500 rounded-r-full drawer-button lg:hidden absolute -left-[10px]">
      <LuMenu size={18}/>
    </label>
  )
}
