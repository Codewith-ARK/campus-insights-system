'use client'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard';
import SectionHeader from '@/components/SectionHeader'
import SectionHeading from '@/components/SectionHeading';
import EmptyContainer from '@/components/skeleton/EmptyContainer';
import LoadingContainer from '@/components/skeleton/LoadingContainer';
import axiosClient from '@/lib/axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

export default function page() {
  const [feedbackResponse, setFeedbackResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResponses = async () => {
      try{
        setIsLoading(true);
        const res = await axiosClient.get('/api/response/get/all/')
        setFeedbackResponse(res.data);
        console.log(res.data)
      } catch (err){
        console.error(err)
        toast.error("Error", {description: "Error loading responses"});
      } finally{
        setIsLoading(false);
      }
    }

    fetchResponses();
  }, [])
  return (
    <div>
      <SectionHeader
        title={"Feedbacks"}
        subtitle={"User feedback and responses"}
      />
      <section className='relative'>
        <LoadingContainer isLoading={isLoading}/>
        <SectionHeading text={"Active Forms"} />
        {
          feedbackResponse?.length > 0
            ? (
              <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  feedbackResponse?.map((item, index) => (
                    <FeedbackFormCard props={item} key={index} />
                  ))
                }
              </section>
            )
            : <EmptyContainer label={"No feedback yet"} />
        }
      </section>
    </div>
  )
}