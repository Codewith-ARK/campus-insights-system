'use client'
import SectionHeader from '@/components/SectionHeader'
import EmptyContainer from '@/components/skeleton/EmptyContainer'
import Button from '@/components/ui/Button'
import ProfileAvatar from '@/components/user/ProfileAvatar'
import ProfileDropdown from '@/components/user/ProfileDropdown'
import useAuthStore from '@/store/useAuthStore'
import React from 'react'

export default function page() {
  const user = useAuthStore(state => state.user);
  const profileFields = [
    { label: "Email", value: user?.email },
    { label: "First Name", value: user?.first_name },
    { label: "Last Name", value: user?.last_name },
    { label: "Role", value: user?.role },
    { label: "Department", value: user?.department },
    { label: "Batch", value: user?.batch },
    { label: "Enrollment Number", value: user?.enrollment_number }
  ]

  return (
    <div>
      <SectionHeader
        title={"User Profile"}
        subtitle={"Customize your personal profile"}
      />
      <section className='flex flex-col'>
        <section className='mx-auto mb-6'>
          <ProfileAvatar firstName={user?.first_name} lastName={user?.last_name} className={"w-32 h-32"} />
        </section>

        <section className='grid md:grid-cols-2 gap-4'>
          {profileFields.map((field, index) => (
            <ProfileInputField
              key={index}
              label={field.label}
              value={field.value || ""}
            />
          ))}
        </section>
        <section className='mt-6 space-x-2'>
          <Button usePrimaryColor={true}>Edit</Button>
          <Button className={"btn-neutral"}>Cancel</Button>
        </section>
      </section>
    </div>
  )
}

function ProfileInputField({ label, value, isDisabled = true }) {
  return (
    <fieldset className="fieldset max-w-sm">
      <legend className="fieldset-legend text-sm text-gray-400 font-normal">{label}</legend>
      <input type="text" className="w-full input dark:bg-gray-800/70 text-base font-medium" value={value} readOnly={true} />
    </fieldset>
  )
}