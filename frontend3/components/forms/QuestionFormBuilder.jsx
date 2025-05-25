// components/forms/FormBuilder.jsx
'use client'

import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formBuilderSchema } from '../validation/FormBuilderSchema';
import TitleInput from './TitleInput';
import DescInput from './DescInput';
import QuestionCard from './QuestionCard';
import { nanoid } from 'nanoid';
import Button from '../ui/Button';
import { LuPlus } from 'react-icons/lu';
import { toast } from 'sonner';
import AudienceInput from './AudienceInput';
import { makeAuthenticatedReq } from '@/utils/makeAuthenticatedReq';
import { useRouter } from 'next/navigation';

export default function FormBuilder() {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(formBuilderSchema),
    defaultValues: {
      title: '',
      description: '',
      department: '',
      batch: '',
      questions: [
        { id: nanoid(6), question: '', type: 'radio', options: [''] },
      ],
    },
  });

  const { fields, append, remove, swap } = useFieldArray({
    control: methods.control,
    name: 'questions',
    keyName: 'key', // avoids conflict with id
  });

  const onAddQuestion = () =>
    append({ id: nanoid(), question: '', type: 'checkbox', options: [''] });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const cleanedData = {
        ...data,
        questions: data.questions.map(q => ({
          ...q,
          options: q.options.filter(opt => opt.trim() !== ""),
        })),
      };

      // const res = await axiosClient.post('/api/feedback/forms/new/', cleanedData)
      const res = await makeAuthenticatedReq('/api/form/new/', cleanedData);
      if(res.status === 201){
        // Display success toast
        toast.success("Created Successfully", { description: "Your form was created successfully." });
        router.push('/admin/form/');
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      // Display error toast
      toast.error("Error creating form", { description: `Your form was not created. ${error.message}` });
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className='flex flex-col md:flex-row justify-between md:gap-6'>
          <div className='grow'>
            <TitleInput />
            <DescInput />
          </div>
          <div className='grow'>
            <AudienceInput />
          </div>
        </div>

        <div className="divider mb-6">Questions</div>

        {fields.map((field, idx) => (
          <QuestionCard
            key={field.key}
            index={idx}
            field={field}
            remove={remove}
            swap={swap} // for drag/drop
            errors={methods.formState.errors.questions?.[idx]} // Pass errors for the specific question
          />
        ))}

        <Button
          onClickHandler={onAddQuestion}
          className="btn btn-success mb-0 me-2"
        >
          <LuPlus size={18} /> Add Question
        </Button>

        <Button className="btn btn-info">
          Save Form
        </Button>
      </form>
    </FormProvider>
  );
}
