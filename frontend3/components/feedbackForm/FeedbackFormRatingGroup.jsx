'use client'
import React, { useEffect, useState } from 'react'
import FeedbackFormSelectInput from './FeedbackFormSelectInput'
import axiosClient from '@/lib/axios';
import FeedbackFormInputField from './FeedbackFormInputField';

export default function FeedbackFormRatingGroup() {
  const [selectedValue, setSelectedValue] = useState(0);
  useEffect(() => {

  }, [])

  const handler = (e) => {
    console.log(e.target.value[0]);
    setSelectedValue(Number(e.target.value[0]));
  }

  const ratingOptions = [
    { name: "3-Point Scale", value: "3 point scale" },
    { name: "5-Point Scale", value: "5 point scale" },
    { name: "7-Point Scale", value: "7 point scale" },
  ]
  const allOptions = [
    "Absolutely Disagree",
    "Slightly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Slightly Agree",
    "Absolutely Agree",
  ]

  const getCenteredOptions = (count) => {
    const neutralIndex = allOptions.indexOf("Neutral"); // always index 3
    const half = Math.floor(count / 2);
    const start = neutralIndex - half;
    return allOptions.slice(start, start + count);
  };

  const centeredOptions = getCenteredOptions(selectedValue);

  const index = 1;
  return (
    <div>
      <FeedbackFormSelectInput
        label={"Templates"}
        name={`questions.${index}.rating`}
        options={ratingOptions}
        handler={handler}
      />

      {centeredOptions.map((label, idx) => (
        <FeedbackFormInputField
          key={idx}
          index={idx + 1}
          name={`questions.${index}.options.${idx}`}
          value={label}
        />
      ))}
    </div>
  )
}
