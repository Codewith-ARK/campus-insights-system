import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { useFormContext, Controller } from 'react-hook-form';
import { CSS } from '@dnd-kit/utilities';
import { LuGripVertical, LuPlus, LuTrash2 } from 'react-icons/lu';
import Button from '../ui/Button';

export default function QuestionCard({ field, index, remove, swap }) {
  const { id, question, type, options } = field;
  const { control, register, formState: { errors } } = useFormContext();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border border-gray-700 border-l-4 border-l-emerald-500  p-4 mb-4 rounded-xl shadow-md"
    >
      <div className="flex justify-between items-start mb-3">
        <button {...listeners} {...attributes} className="btn btn-success btn-square">
          <LuGripVertical size={18} />
        </button>
        <button onClick={() => remove(index)} className="btn btn-square btn-error">
          <LuTrash2 size={18} />
        </button>
      </div>

      <div className='space-y-4'>
        <div className="flex gap-4 flex-col sm:flex-row">
          {/* Question Text */}
          <div className="fieldset grow">
            <legend className='fieldset-legend text-base font-base text-gray-400'>Question {index + 1}</legend>
            <input
              {...register(`questions.${index}.question`)}
              className="input w-full bg-gray-800"
              placeholder=''
            />
            {errors.questions?.[index]?.question && (
              <p className="text-sm text-red-500">
                {errors.questions[index].question.message}
              </p>
            )}
          </div>

          {/* Type Selector */}
          <div className="fieldset max-w-xs w-full">
            <legend className='fieldset-legend text-base font-base text-gray-400'>Answer Type</legend>
            <select
              {...register(`questions.${index}.type`)}
              className="select select-bordered w-full bg-gray-800"
            >
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
        </div>

        {/* Options Array */}
        <Controller
          control={control}
          name={`questions.${index}.options`}
          render={({ field: { value, onChange } }) => (
            <div className="space-y-2">
              {value.map((opt, idx) => (
                <div key={idx} className="flex flex-col">
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const newOpts = [...value];
                      newOpts[idx] = e.target.value;
                      onChange(newOpts);
                    }}
                    className="input input-bordered w-full bg-gray-800"
                    placeholder={`Option ${idx + 1}`}
                  />
                  {errors.questions?.[index]?.options?.[idx] && (
                    <p className="text-sm text-red-500">
                      {errors.questions[index].options[idx].message}
                    </p>
                  )}
                </div>
              ))}


              <Button
                onClickHandler={() => onChange([...value, ''])}
                className="btn btn-outline btn-success mt-2"
              >
                <LuPlus size={18} />
                Add Option
              </Button>
            </div>
          )}
        />

      </div>

    </div>
  );
}
