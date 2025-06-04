import SectionHeader from '@/components/SectionHeader'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import React from 'react'

export default function page() {
  return (
    <div>
      <SectionHeader 
      title={"Analytics"}
      subtitle={"View analytical feedback of forms"}
      />
      <EmptyContainer label={"Under Development..."}/>
    </div>
  )
}
