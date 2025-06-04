'use client'
import SectionHeader from '@/components/SectionHeader';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';
import CustomBadge from '@/components/ui/CustomBadge';
import axiosClient from '@/lib/axios';
import useAuthStore from '@/store/useAuthStore';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Page() {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useAuthStore(state => state.user);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    async function fetchForm() {
      const res = await axiosClient.get(`/api/form/get/${id}/`);
      await axiosClient.get(`/api/response/get/${id}`).then(res => console.log(res));
      setForm(res.data);
    }

    fetchForm();
  }, [id])

  if (!form) return <div>Loading...</div>;

  const handleInputChange = (questionId, value, type) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: type === 'checkbox'
        ? [...(prev[questionId] || []), value].filter(v => v) // Handle array for checkboxes
        : value // Single value for radio
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosClient.post('/api/response/submit/', {
        form_id: id,
        user_id: user.id,
        answers_data: Object.entries(answers).map(([questionId, value]) => ({
          question_id: questionId,
          answer: value
        }))
      });
      // Show success message or redirect
    } catch (error) {
      console.error('Submit error:', error.response?.data || error); // Detailed error log
    }
    setLoading(false);
  };

  return (
    <>
      <SectionHeader
        title={form.title}
        description={form.description}
      >
        <CustomBadge value={form.batch} />
        <CustomBadge value={form.department} />
        <div className="mt-4 text-sm text-gray-400">
          Created by: {form.author.first_name} {form.author.last_name}
        </div>
      </SectionHeader>

      <SectionHeading text="Questions" />
      <form onSubmit={handleSubmit} className="space-y-4">
        {form.questions?.map((item, index) => (
          <FormQuestions
            key={item.id}
            questionId={item.id}
            index={index}
            text={item.question}
            questionType={item.type}
            options={item.options_data}
            onChange={handleInputChange}
          />
        ))}

        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            {loading ? 'Submitting...' : 'Submit Response'}
          </Button>
        </div>
      </form>
    </>
  )
}

function FormQuestions({ questionId, index, text, questionType, options, onChange }) {
  const handleChange = (e) => {
    const value = questionType === 'checkbox'
      ? e.target.checked ? e.target.value : null
      : e.target.value;
    onChange(questionId, value, questionType);
  };

  return (
    <div className='bg-gray-800 px-4 py-6 rounded-md border border-gray-700'>
      <h4 className="text-lg mb-4">{index + 1}. {text}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <input
              type={questionType}
              className={questionType === 'radio' ? 'radio' : 'checkbox'}
              name={`question_${questionId}`}
              value={option.id}
              onChange={handleChange}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  )
}