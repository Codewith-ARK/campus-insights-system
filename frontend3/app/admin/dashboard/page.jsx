import React from 'react'
import { statCardsData } from '@/data/statCardData'
import DashboardFilter from '@/components/filters/DashboardFilter'
import StatCard from '@/components/statCard/StatCard'
import { LuArrowRight, LuPencil } from 'react-icons/lu'
import AdminActionCard from '@/components/cards/AdminActionCard'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import SectionHeader from '@/components/SectionHeader'

export default function page() {
  return (
    <div className='flex flex-col gap-8'>
      <SectionHeader
        title={"Dashboard"}
        subtitle={"View and analyze feedback"}
        description={"This dashboard provides insights into student feedback, helping faculty and administrators identify areas for improvement and track satisfaction metrics over time."}
      />
      <section id='actions' className=''>
        <SectionHeading text={"Admin Actions"} />
        <section className='grid grid-cols-1 md:grid-cols-3'>
          <AdminActionCard
            title={"Create a form"}
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, maxime!"}
            icon={<LuPencil size={18} />}
            url={'/admin/form/new'}
          />
        </section>
      </section>
      <section id='stats' className=''>
        <SectionHeading text={"Stats"} />
        <section className='grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            statCardsData.map((item, index) => (
              <StatCard
                key={index}
                label={item.label}
                value={item.value}
                outcome={item.outcome}
                icon={item.icon}
              />
            ))
          }
        </section>
      </section>
      <section>
        <DashboardFilter />
        <EmptyContainer label={"Nothing to show here..."} />
      </section>
    </div>
  )
}
