'use client'
import AdminActionCard from '@/components/cards/AdminActionCard'
import FeedbackForm from '@/components/feedbackForm/FeedbackForm';
import SectionHeading from '@/components/SectionHeading'
import axiosClient from '@/lib/axios';
import React, { useEffect, useState } from 'react'
import { LuChartSpline, LuFileStack, LuPencil } from 'react-icons/lu'

export default function page() {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    async function fetchForms() {
      try {
        const res = await axiosClient.get("/api/form/get/all/");
        console.log(res.data)
        setForms(res.data);
      } catch (error) {
        console.error("Failed to fetch forms:", error);
      }
    }
    fetchForms();
  }, []);

  return (
    <div>
      <SectionHeading text={"Forms"} />
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <AdminActionCard
          url={"/admin/form/all"}
          title={"View forms"}
          description={"View all feedback forms"}
          icon={<LuFileStack size={18} />}
        />

        <AdminActionCard
          url={"/admin/form/new"}
          title={"Create form"}
          description={"Create a new feedback form"}
          icon={<LuPencil size={18} />}
        />

        <AdminActionCard
          url={"/admin/form/feedback"}
          title={"View Analytics"}
          description={"View detailed analytics from feedback"}
          icon={<LuChartSpline size={18} />}
        />

      </section>

      <SectionHeading text={"Recent Forms"} />
      <section className='flex flex-col space-y-3'>
        {forms?.map((item, index) => (
          <FeedbackForm key={index}/>
        ))}
      </section>
    </div>
  )
}
