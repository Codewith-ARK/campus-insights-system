'use client'
import React, { useEffect, useState } from 'react'
import axiosClient from '@/lib/axios'
import useAuthStore from '@/store/useAuthStore'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import isAdmin from '@/utils/isAdmin'
import { useRouter } from 'next/navigation'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard'

export default function page() {
  const [forms, setForms] = useState([]);
  const user = useAuthStore(state => state.user);
  const router = useRouter();
  
  useEffect(() => {
    async function checkPermissionAndRedirect() {
      if (user?.role !== 'student') {
        router.replace("/admin/dashboard");
      }
    }
    async function fetchStudentForms() {
      if (user) {
        const res = await axiosClient.get(`/api/form/query/?batch=${user?.batch}&department=${user?.department}`)
        setForms(res.data);
      }
    }
    checkPermissionAndRedirect();
    fetchStudentForms();
  }, [])
  return (
    <div className='flex flex-col gap-8'>
      <section className='p-6 border border-gray-700 rounded-xl'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <p className='text-neutral-400'>View and submit feedback across all courses and departments</p>
      </section>

      <section>
        <SectionHeading text={"Feedback Forms"} />
        <section>
          {forms.length > 0
            ? forms.map((item, index) => (<FeedbackFormCard props={item} key={index} />))
            : <EmptyContainer label={"No feedback forms."} />
          }
        </section>
      </section>
    </div>
  )
}
