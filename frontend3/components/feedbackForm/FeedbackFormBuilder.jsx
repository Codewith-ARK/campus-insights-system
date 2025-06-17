'use client'
import React, { useEffect, useState } from 'react'
import BaseCardContainer from '../cards/BaseCardContainer'
import { LuCircleHelp, LuFileText, LuPlane, LuPlus, LuSendHorizontal, LuUsersRound } from 'react-icons/lu'
import { batchOptions, deptOptions, userOptions } from '@/data/selectOptions'
import FeedbackFormTextarea from './FeedbackFormTextArea'
import FeedbackFormQuestionCard from './FeedbackFormQuestionCard'
import FeedbackFormSelectInput from './FeedbackFormSelectInput'
import { toast } from 'sonner'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formBuilderSchema } from '../validation/FormBuilderSchema'
import FeedbackFormTitleInput from './FeedbackFormTitleInput'


export default function FeedbackFormBuilder() {
  const statusOptions = ["Active", "Closed"]

  const [questions, setQuestions] = useState(1);
  const addQuestion = () => setQuestions(questions + 1);
  const removeQuestion = () => setQuestions(questions - 1);

  const methods = useForm({
    resolver: yupResolver(formBuilderSchema),
    defaultValues: {
      title: '',
      status: '',
      description: '',
      audiences: [
        {
          custom_label: "Default Label",
          role: '',
        }
      ], questions: [
        {
          text: "",
          type: "",
          options: [""]
        }
      ]
    }
  });

  const { handleSubmit, reset, formState: { errors } } = methods;

  const submitForm = (data) => {
    // e.preventDefault()
    // console.log(questions);
    // console.log(e)
    // if (questions == 0) {
    //   toast.error("Insufficient Questions", { description: "Add at least one question" });
    //   return
    // }
    // toast.info("Submitting...");
    const isSubmitting = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve({name: 'My toast'}, 3000);
      })
    })
    toast.promise(isSubmitting, {
      loading: "Submitting form...",
      success: "Form Submitted",
    })
    console.log(data)
    // reset();
  }

  const onError = () => {
    toast.error("Error submitting...", {description: "Your form has errors."})
    console.log(errors)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitForm, onError)}>
        <section className='flex flex-col gap-6'>
          <BaseCardContainer>
            <h2 className='flex items-center gap-2 text-xl font-bold'>
              <LuFileText size={22} className='text-emerald-500' />
              Form Details
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>Basic information about your form</p>
            <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
              <FeedbackFormTitleInput name={"title"} label='Title' isRequired={true}/>
              <FeedbackFormSelectInput label={"Status"} options={statusOptions} name={`status`} isRequired={true}/>
            </div>
            <FeedbackFormTextarea label={"Description (Optional)"} name={`description`} />
          </BaseCardContainer>

          <BaseCardContainer>
            <h2 className='flex items-center gap-2 text-xl font-bold'>
              <LuUsersRound size={22} className='text-emerald-500' />
              Target Audience
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>Define who can access and fill this form</p>
            <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
              <FeedbackFormSelectInput label={"Users"} options={userOptions} name={`audiences.role`} isRequired={true}/>
              <FeedbackFormSelectInput label={"Batches"} options={batchOptions} name={`audiences.batch`} />
              <FeedbackFormSelectInput label={"Departments"} options={deptOptions} name={`audiences.department`} />
            </div>
          </BaseCardContainer>

          <BaseCardContainer>
            <h2 className='flex items-center gap-2 text-xl font-bold'>
              <LuCircleHelp size={22} className='text-emerald-500' />
              Questions
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>Add questions to your form</p>
            <div className='space-y-4'>
              {[...Array(questions)].map((_, index) => (
                <FeedbackFormQuestionCard index={index} key={index} removeQuestion={removeQuestion} />
              ))}
              <div className='flex gap-6'>
                <button onClick={addQuestion} className='btn btn-accent btn-dash grow'>
                  <LuPlus size={18} />
                  Add Question
                </button>
                <button type='submit' className='btn btn-accent grow'>
                  <LuSendHorizontal size={18} />
                  Submit form
                </button>
              </div>

            </div>
          </BaseCardContainer>

        </section>
      </form>
    </FormProvider>
  )
}

