'use client'
import AdminActionCard from '@/components/cards/AdminActionCard'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard';
import SectionHeading from '@/components/SectionHeading'
import EmptyContainer from '@/components/skeleton/EmptyContainer';
import LoadingContainer from '@/components/skeleton/LoadingContainer';
import axiosClient from '@/lib/axios';
import React, { useEffect, useState } from 'react'
import { LuChartSpline, LuFileStack, LuPencil } from 'react-icons/lu'

export default function page() {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchForms() {
      try {
        setIsLoading(true);
        const res = await axiosClient.get("/api/form/get/all/");
        console.log(res.data)
        setForms(res.data);
      } catch (error) {
        console.error("Failed to fetch forms:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchForms();
  }, []);

  return (
    <div>
      <SectionHeading text={"Actions"} />
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
          isDisabled={true}
        />

      </section>

      <SectionHeading text={"Recent Forms"} />
      <section className='relative'>
        <LoadingContainer isLoading={isLoading} />
        {
          forms?.length > 0
            ? (
              <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 gap-6'>
                {
                  forms?.map((item, index) => (
                    <FeedbackFormCard props={item} key={index} />
                  ))
                }
              </section>
            )
            : <EmptyContainer label={"No feedback forms found"} />
        }
      </section>
      <section>
        <SectionHeading text={"Recent Updates"} />
        <EmptyContainer label={"Nothing to show here..."} />
      </section>
    </div>
  )
}
