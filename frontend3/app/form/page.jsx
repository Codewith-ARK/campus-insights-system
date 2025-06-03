'use client'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard'
import SectionHeader from '@/components/SectionHeader'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import axiosClient from '@/lib/axios'
import useAuthStore from '@/store/useAuthStore'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [forms, setForms] = useState([]);
  const user = useAuthStore(state => state.user);
  const { batch, department } = user;

  useEffect(() => {
    async function fetchUserForms() {
      const res = await axiosClient.get(
        `/api/form/query/?batch=${batch}&department=${department}`
      );
      setForms(res.data);
    }

    fetchUserForms();
  }, [])
  return (
    <div>
      <SectionHeader
        title={"Forms"}
        subtitle={"Submit feedback, browse submitted forms all in one place"}
      />
      <SectionHeading
        text={"Feedback Forms"}
      />
      <section className=''>
        {forms?.length > 0
          ? (
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {forms?.map((item, index) => <FeedbackFormCard props={item} key={index} />)}
            </section>
          )
          : <EmptyContainer label={"No any forms"} />
        }
      </section>
    </div>
  )
}
