'use client'
import FeedbackForm from '@/components/feedbackForm/FeedbackForm'
import SectionHeader from '@/components/SectionHeader'
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import axiosClient from '@/lib/axios'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    async function fetchAllForms() {
      const res = await axiosClient.get(
        `/api/form/get/all/`
      );
      setForms(res.data);
    }

    fetchAllForms();
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
      <section>
        {forms?.length > 0 
        ? forms.map((item, index)=><FeedbackForm key={index}/>)
        : <EmptyContainer label={"No any forms"}/>
        }
      </section>
    </div>
  )
}
