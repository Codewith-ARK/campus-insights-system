import React from 'react'
import { get, useFormContext } from 'react-hook-form';
import { LuTrash } from 'react-icons/lu';

export default function FeedbackFormInputField({
  label = "",
  type = "text",
  name,
  placeholder = "Type here...",
  isRequired = false,
  removeInput = () => null,
  index,
  value
}) {

  const { register, formState: { errors } } = useFormContext();
  const error = get(errors, name)
  return (
    <div className="flex gap-4 items-start w-full transition ease-in">
      <legend className="fieldset-legend text-sm">{`${index}.`}{isRequired && <span className='text-error'>*</span>}</legend>
      <fieldset className="fieldset grow ">
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`input dark:bg-gray-900 w-full ${error && 'input-error'}`}
          value={value}
        />
        {error && <p className="text-error text-xs mt-1">{error.message}</p>}
      </fieldset>
      <button onClick={removeInput} className="mt-1 btn btn-error btn-square btn-dash" title="Delete Option">
        <LuTrash size={18} />
      </button>
    </div>
  )
}
