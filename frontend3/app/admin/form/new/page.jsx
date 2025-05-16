import QuestionFormBuilder from '@/components/forms/QuestionFormBuilder'
import SectionHeader from '@/components/SectionHeader'
import { FormBuilderProvider } from '@/context/FormBuilderContext'

import React from 'react'

export const metadata = {
  title: "Campus Insights System - New Form",
  description: "",
};


export default function page() {
  return (<>
    <FormBuilderProvider>
      <div>
        <SectionHeader
          title={"Create a form"}
          subtitle={"Create a feedback evaluation form."}
        />
      </div>
      <QuestionFormBuilder />
    </FormBuilderProvider>
  </>
  )
}
