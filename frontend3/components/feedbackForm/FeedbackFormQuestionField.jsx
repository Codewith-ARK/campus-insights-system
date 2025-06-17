import React from 'react'
import { get, useForm, useFormContext } from 'react-hook-form'

export default function FeedbackFormQuestionField({ name, label, type, index, isRequired=true, placeholder = "Enter question here..." }) {
  const { register, formState: { errors } } = useFormContext();
  const error = get(errors, name);
  return (
    <fieldset className="fieldset grow">
      <legend className="fieldset-legend text-base">Prompt{isRequired && <span className='text-error'>*</span>}</legend>
      <input {...register(name)} type={type} className={`input dark:bg-gray-900 w-full ${error && 'input-error'}`} placeholder={placeholder} name={name} />
      {error?.message && <p className="text-error text-xs mt-1">{error?.message}</p>}
    </fieldset>
  )
}
