import React from 'react'
import LinkButton from '../ui/LinkButton'
import ProfileAvatar from '../user/ProfileAvatar';

export default function FeedbackForm({ props }) {
  function formatDate(date) {
    return new Date(date).toLocaleString('en-PK', { "dateStyle": "short", timeStyle: "short" });
  }
  return (
    <div className='px-4 py-8 rounded-2xl flex flex-col gap-4 justify-between border border-gray-700'>
      <section className='space-y-4'>
        <div className='flex flex-col justify-between md:flex-row items-start md:items-center gap-2'>
          <div className="space-x-1">
            <div className="badge badge-sm bg-gray-700 text-gray-300 uppercase">{props.batch}</div>
            <div className="badge badge-sm bg-gray-700 text-gray-300 uppercase">{props.department}</div>
          </div>
          <div className='text-sm text-gray-600'>
            {formatDate(props.created_at)}
          </div>
        </div>
        <div className='flex flex-col items-start justify-between gap-6'>
          <div>
            <h1>{props.title}</h1>
            <p className='text-gray-400'>{props.description}</p>
          </div>
        </div>
      </section>
      <section className='flex justify-between items-end gap-1'>
        <LinkButton url={props.linkToForm ? props.linkToForm : `/admin/form/${props.id}`}>
          <p>View Form</p>
        </LinkButton>
        <div>
          {props.author && (
            <div className='flex items-center justify-end gap-2'>
              <div className='text-right'>
                <p className='text-xs text-gray-400'>Author:</p>
                <p className='text-sm'>{`${props.author.first_name} ${props.author.last_name}`}</p>
              </div>
              <ProfileAvatar firstName={props.author.first_name} lastName={props.author.last_name} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
