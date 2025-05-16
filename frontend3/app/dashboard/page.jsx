'use client'
import React, { useEffect, useState } from 'react'
import StatCard from '../../components/statCard/StatCard'
import { statCardsData } from '@/data/statCardData'
import DashboardFilter from '@/components/filters/DashboardFilter'
import { makeAuthenticatedReq } from '@/utils/makeAuthenticatedReq'
import axiosClient from '@/lib/axios'
import { useUser } from '@/context/UserContext'
import SectionHeading from '@/components/SectionHeading'
import FeedbackForm from '@/components/feedbackForm/FeedbackForm'
import EmptyContainer from '@/components/skeleton/EmptyContainer'

export default function page() {
  const [forms, setForms] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    async function fetchStudentForms() {
      if (user) {
        console.log(user)
        const res = await axiosClient.get(`/api/form/query/?batch=${user?.batch}&department=${user?.department}`)
        console.log(res.data);
        setForms(res.data);
      }
    }
    fetchStudentForms();
  }, [])
  return (
    <div className='flex flex-col gap-8'>
      <section className='p-6 border border-gray-700 rounded-xl'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-neutral-400'>View and submit feedback across all courses and departments</p>
      </section>

      {/* <section className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
      </section> */}
      <section>
        <SectionHeading text={"Feedback Forms"} />
        <section>
          {forms.length > 0
            ? forms.map((item, index) => (<FeedbackForm props={item} key={index} />))
            : <EmptyContainer label={"No feedback forms."}/>
          }
        </section>
      </section>
    </div>
  )
}
