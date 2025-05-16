import { useFormContext } from 'react-hook-form';

export default function DescInput() {
  const { register } = useFormContext();
  return (
    <fieldset className="fieldset">
      <legend className='fieldset-legend text-base font-base text-gray-400'>Description (optional)</legend>
      <textarea
        {...register('description')}
        className="textarea max-w-lg w-full min-h-40 bg-gray-800"
        placeholder="Enter description"
      />
    </fieldset>
  );
}
