export default function FeedbackFormTextarea({ label, name, placeholder="Enter text here...", isRequired }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-base">{label}{isRequired && <span className='text-error'>*</span>}</legend>
      <textarea className="textarea h-24 w-full dark:bg-gray-900" placeholder={placeholder}></textarea>
    </fieldset>
  )
}