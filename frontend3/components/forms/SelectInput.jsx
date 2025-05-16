import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function SelectInput({ label, name, options, register, errors }) {
  /**
   * Selection input styled component for forms
   * @param {string} label Label for the input
   * @param {string} name name for the input field. MUST BE IN pascalCase OR snake_case
   * @param {string[]} options An array of string values for all the values of this select component
   */
  // const { register, formState: { errors } } = useFormContext();
  return (
    <fieldset className="fieldset col-span-2 md:col-span-1">
      <legend className="fieldset-legend text-base text-gray-400">{label}</legend>
      <select className="select w-full bg-gray-800 text-base"
        {...register(name)}
      >
        <option value="" selected disabled>---Select---</option>
        {options.map((item, index) => (
          item.name
            ? <option value={item.value} key={index}>{item.name}</option>
            : <option value={item} key={index}>{item}</option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </fieldset>
  )
}
