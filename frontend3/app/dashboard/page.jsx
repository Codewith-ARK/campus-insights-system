'use client'
import React, { useEffect, useState } from 'react'
import axiosClient from '@/lib/axios'
import useAuthStore from '@/store/useAuthStore'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import isAdmin from '@/utils/isAdmin'
import { useRouter } from 'next/navigation'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard'
import LoadingContainer from '@/components/skeleton/LoadingContainer'

export default function page() {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        try {
          setIsLoading(true);
          const res = await axiosClient.get(`/api/form/query/?batch=${user?.batch}&department=${user?.department}`)
          setForms(res.data);
        } finally{
          setIsLoading(false)
        }
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
        <section className='relative'>
          <LoadingContainer isLoading={isLoading}/>
          {forms.length > 0
            ? (
              <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {forms.map((item, index) => (<FeedbackFormCard props={item} key={index} />))}
              </section>
            )
            : <EmptyContainer label={"No feedback forms."} />
          }
        </section>
      </section>
    </div>
  )
}
