'use client'
import React from 'react'
import SelectInput from './SelectInput'
import { useFormContext } from 'react-hook-form';
import { batchOptions, deptOptions } from '@/data/selectOptions';

export default function AudienceInput() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <SelectInput
        name={'batch'}
        label={"Batch"}
        options={batchOptions}
        register={register}
        errors={errors}
      />
      <SelectInput
        name={'department'}
        label={"Department"}
        options={deptOptions}
        register={register}
        errors={errors}
      />
    </>
  )
}
