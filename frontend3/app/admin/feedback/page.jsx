'use client'
import FeedbackFormCard from '@/components/feedbackForm/FeedbackFormCard';
import SectionHeader from '@/components/SectionHeader'
import SectionHeading from '@/components/SectionHeading';
import axiosClient from '@/lib/axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { LuMoveRight } from 'react-icons/lu';

export default function page() {
  const [feedbackResponse, setFeedbackResponse] = useState();
  useEffect(() => {
    const fetchResponses = async () => {
      const res = await axiosClient.get('/api/response/get/all/')
      setFeedbackResponse(res.data);
      console.log(res.data)
    }

    fetchResponses();
  }, [])
  return (
    <div>
      <SectionHeader
        title={"Feedbacks"}
        subtitle={"User feedback and responses"}
      />

      <SectionHeading text={"Active Forms"} />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {feedbackResponse?.map((item, index) => (
          // <ResponseCard
          //   key={index}
          //   id={item.id}
          //   title={item.title}
          //   desc={item.description}
          //   questions={item.questions}
          //   responses={item.responses}
          // />

          <FeedbackFormCard props={item} key={index} />
        ))}
      </section>
    </div>
  )
}

function ResponseCard({ id, title, desc, questions, responses }) {
  return (
    <Link href={`/admin/feedback/${id}`} className='h-full'>
      <div className='h-full py-6 px-4 border border-gray-700 rounded-xl text-gray-400 flex flex-col justify-between'>
        <div>
          <h1 className='font-medium text-lg text-white'>{title}</h1>
          <p className='text-gray-400'>{desc}</p>
        </div>
        <div className='my-2 space-y-2'>
          <p className='py-1 px-3 rounded-sm border border-gray-700'>Questions: {questions.length}</p>
          <p className='py-1 px-3 rounded-sm border border-gray-700'>Responses: {responses.length}</p>
          <div className='mt-4 btn btn-accent rounded-full w-fit flex gap-1 justify-end items-center'>
            <p>View Responses</p>
            <LuMoveRight />
          </div>
        </div>
      </div>
    </Link>
  )
}