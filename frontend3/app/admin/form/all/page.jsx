import SectionHeader from '@/components/SectionHeader'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import React from 'react'

export default function page() {
  return (
    <div>
      <SectionHeader 
      title={"All Feedback Forms"}
      subtitle={"View all feedback forms for all audiences"}
      />
      <EmptyContainer label={"Under Development..."}/>
    </div>
  )
}
