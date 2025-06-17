import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function FeedbackFormTitleInput({
  label = "",
  name,
  placeholder = "Type here...",
  isRequired = false,
}) {

  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex gap-4 items-center grow">
      <fieldset className="fieldset grow ">
        <legend className="fieldset-legend text-base">{label}{isRequired && <span className='text-error'>*</span>}</legend>
        <input
          {...register(name)}
          placeholder={placeholder}
          name={name}
          className={`input dark:bg-gray-900 w-full ${errors[name] ? 'input-error' : ''}`}
        />
        {errors[name]?.message && <p className="text-error text-xs mt-1">{errors[name]?.message}</p>}
      </fieldset>
    </div>
  )
}