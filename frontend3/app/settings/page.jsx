import SectionHeader from '@/components/SectionHeader'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import React from 'react'

export default function page() {
  return (
    <div>
      <SectionHeader
        title={"User Preferences"}
        subtitle={"Customize your app preferences."}
      />

      <EmptyContainer label={"Under Development..."}/>
    </div>
  )
}
