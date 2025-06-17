'use client'
import { useEffect, useState } from "react";
import { LuGripVertical, LuTrash } from "react-icons/lu";
import FeedbackFormInputGroup from "./FeedbackFormInputGroup";
import FeedbackFormTextarea from "./FeedbackFormTextArea";
import FeedbackFormQuestionField from "./FeedbackFormQuestionField";
import FeedbackFormSelectInput from "./FeedbackFormSelectInput";
import { questionTypeOptions } from "@/data/selectOptions";
import FeedbackFormRatingGroup from "./FeedbackFormRatingGroup";

export default function FeedbackFormQuestionCard({ index, removeQuestion }) {
  const [answerType, setAnswerType] = useState('radio');
  const [responseInput, setResponseInput] = useState(<></>);

  useEffect(() => {
    function renderResponseInput() {
      if (answerType == "radio" || answerType == "checkbox") {
        setResponseInput(
          <FeedbackFormInputGroup qIndex={index} />
        )
      }
      if (answerType == "text") {
        setResponseInput(
          <FeedbackFormTextarea />
        )
      }
      if (answerType == "rating") {
        setResponseInput(
          // <FeedbackFormInputField label={"Rating Scale"} isRequired={true} />
          <FeedbackFormRatingGroup />
        )
      }
    }
    renderResponseInput();
  }, [answerType])

  function onSelectChange(e) {
    setAnswerType(e.target.value);
  }

  return (
    <section className="flex flex-col md:flex-row gap-4">
      {/* <h4>Q. {index}:</h4> */}
      <div className='w-full bg-gray-300/30 dark:bg-gray-700/70 p-4 rounded-md flex flex-col items-start gap-4 border border-gray-300 dark:border-gray-600'>
        <button onClick={removeQuestion} className="btn btn-error" title="Remove Question">
          <LuTrash size={18} />
          <p>Remove</p>
        </button>
        <div className='w-full'>
          <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
            <FeedbackFormQuestionField
              index={index + 1}
              name={`questions.${index}.text`}
            />
            <FeedbackFormSelectInput
              label={"Answer Type"}
              options={questionTypeOptions}
              handler={onSelectChange}
              name={`questions.${index}.type`}
              isRequired={true}
            />
          </div>
          {responseInput}
        </div>
      </div>
    </section>
  )
}
