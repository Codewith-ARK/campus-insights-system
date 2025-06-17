'use client'
import React from 'react'
import { get, useFormContext } from 'react-hook-form'

export default function FeedbackFormSelectInput({ name, label, options, isRequired = false, handler = () => null }) {
  const { register, formState: { errors } } = useFormContext();
  const error = get(errors, name);

  return (
    <fieldset className="fieldset grow">
      <legend className="fieldset-legend text-base dark:text-gray-400">{label}{isRequired && <span className='text-error'>*</span>}</legend>
      <select {...register(name)} onChange={e => handler(e)} className={`select w-full input dark:bg-gray-900 ${error && "input-error"}`}>
        <option value="">---Select---</option>
        {options.map((item, index) => (
          item.name
            ? <option value={item.value} key={index}>{item.name}</option>
            : <option value={item} key={index}>{item}</option>
        ))}
      </select>
      {error?.message && <p className="text-error text-xs mt-1">{error?.message}</p>}
    </fieldset>
  )
}