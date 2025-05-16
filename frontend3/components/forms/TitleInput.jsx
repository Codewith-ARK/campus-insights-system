import { useFormContext } from 'react-hook-form';

export default function TitleInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="fieldset">
      <legend className='fieldset-legend text-base font-base text-gray-400'>Title</legend>
      <input
        {...register('title')}
        className="input text-lg max-w-lg w-full bg-gray-800"
        placeholder="Form Title"
      />
      {errors.title && (
        <p className="text-sm text-red-500">{errors.title.message}</p>
      )}
    </fieldset>
  );
}
