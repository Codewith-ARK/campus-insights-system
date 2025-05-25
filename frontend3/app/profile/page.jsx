import SectionHeader from '@/components/SectionHeader'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import React from 'react'

export default function page() {
  return (
    <div>
      <SectionHeader
        title={"User Profile"}
        subtitle={"Customize your personal profile"}
      />
      <EmptyContainer label={"Under Development..."}/>
    </div>
  )
}
