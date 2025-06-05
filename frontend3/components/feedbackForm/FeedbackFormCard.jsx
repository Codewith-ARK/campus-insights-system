import React from 'react'
import ProfileAvatar from '../user/ProfileAvatar';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useAuthStore from '@/store/useAuthStore';

function FeedbackFormHeader({ date, batch, department }) {
  function formatDate(date) {
    // return new Date(date).toLocaleString('en-PK', { "dateStyle": "short", timeStyle: "short" });
    dayjs.extend(relativeTime)
    return dayjs(date).fromNow(); // output: 15 days ago, 1 month ago
  }

  return (
    <div className='flex flex-col justify-between md:flex-row items-start md:items-center gap-2'>
      <div className="space-x-1">
        <div className="badge badge-sm bg-gray-700 text-gray-300 uppercase">{batch}</div>
        <div className="badge badge-sm bg-gray-700 text-gray-300 uppercase">{department}</div>
      </div>
      <div className='flex flex-col items-end text-sm text-gray-600'>
        {
          dayjs().diff(dayjs(date), 'hour') <= 24 &&
          <span className="indicator-item badge badge-sm badge-accent animate-pulse">New</span>
        }
        {formatDate(date)}
      </div>
    </div>
  )
}

function FeedbackFormAuthor({ author }) {
  return (
    <div>
      {author && (
        <div className='flex items-center justify-end gap-2'>
          <div className='text-right'>
            <p className='text-xs text-gray-400'>Author:</p>
            <p className='text-sm'>{`${author.first_name} ${author.last_name}`}</p>
          </div>
          <ProfileAvatar firstName={author.first_name} lastName={author.last_name} />
        </div>
      )}
    </div>
  )
}

function FeedbackFormFooter() {
  return (
    <div className='flex gap-1 items-center btn btn-ghost text-gray-400'>
      <p>View Form</p>
      <LuMoveRight size={18} />
    </div>
  )
}

function FeedbackFormContainer({ children }) {
  return (
    <div className='h-full px-4 py-8 rounded-2xl flex flex-col gap-4 justify-between border border-gray-700 hover:ring transition duration-300 cursor-pointer hover:scale-[1.02]'>
      {children}
    </div>
  )
}

function FeedbackFormResponses({ questions, responses }) {
  return (
    <div className='space-y-2'>
      {
        questions &&
        <p className='py-1 px-3 rounded-sm border border-gray-700 text-sm'>Questions: {questions?.length}</p>
      }
      {
        responses &&
        <p className='py-1 px-3 rounded-sm border border-gray-700 text-sm'>Responses: {responses?.length}</p>
      }
    </div>
  )
}
function FeedbackFormBody({ props }) {
  return (
    <>
      <section className='space-y-4'>
        {
          props.department &&
          <FeedbackFormHeader date={props.created_at} batch={props.batch} department={props.department} />
        }
        <div className='space-y-2'>
          <h1 className='text-lg font-medium'>{props.title}</h1>
          <p className='text-gray-400 font-light'>{props.description}</p>
        </div>
      </section>
      <section className='space-y-2'>
        <FeedbackFormAuthor author={props.author} />
        {
          props.questions &&
          <FeedbackFormResponses questions={props.questions} responses={props.responses} />
        }
        <div className='border-t border-gray-700 pt-2 mt-2'>
          <FeedbackFormFooter />
        </div>
      </section>
    </>
  )
}

export default function FeedbackFormCard({ props }) {
  const user = useAuthStore(state => state.user);
  const linkToForm = user?.role == 'student' ? `/form/${props.id}` : `/admin/form/${props.id}`

  return (
    <Link className='h-full' href={linkToForm}>
      <FeedbackFormContainer>
        <FeedbackFormBody props={props} />
      </FeedbackFormContainer>
    </Link>
  )
}

