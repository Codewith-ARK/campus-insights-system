'use client'
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { LuPlus, LuTrash } from "react-icons/lu";
import FeedbackFormInputField from "./FeedbackFormInputField";

export default function FeedbackFormInputGroup({ qIndex }) {
  const [inputCount, setInputCount] = useState(1);
  const addInput = () => setInputCount(prev => prev + 1);
  const removeInput = () => setInputCount(prev => prev - 1);
  const oIndex = 0;

  return (
    <div className="my-4 flex flex-col items-end">
      {[...Array(inputCount)].map((_, idx) => (
        <FeedbackFormInputField
          removeInput={removeInput}
          key={idx}
          index={idx + 1}
          name={`questions.${qIndex}.options.${idx}`}
        />
      ))}

      <button onClick={addInput} className="mt-4 w-full md:w-fit btn btn-accent btn-dash">
        <LuPlus size={18} />
        Add Option
      </button>
    </div>
  )
}