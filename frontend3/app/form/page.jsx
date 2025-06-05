'use client'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard'
import SectionHeader from '@/components/SectionHeader'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import LoadingContainer from '@/components/skeleton/LoadingContainer'
import axiosClient from '@/lib/axios'
import useAuthStore from '@/store/useAuthStore'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useAuthStore(state => state.user);
  let batch, department;
  if (user) {
    ({ batch, department } = user);
  }

  useEffect(() => {
    async function fetchUserForms() {
      try {
        setIsLoading(true);
        const res = await axiosClient.get(
          `/api/form/query/?batch=${batch}&department=${department}`
        );
        setForms(res.data);
      } finally {
        setIsLoading(false)
      }
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
        text={"Forms for You"}
      />
      <section className='relative'>
        <LoadingContainer isLoading={isLoading} />
        {forms?.length > 0
          ? (
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {forms?.map((item, index) => <FeedbackFormCard props={item} key={index} />)}
            </section>
          )
          : <EmptyContainer label={"No forms yet"} />
        }
      </section>

      <SectionHeading text={"Submitted Forms"} />
      <EmptyContainer label={"You have not submitted any forms yet"} />
    </div>
  )
}
