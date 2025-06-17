function FeedbackFormRadio({
  label = "Radio Option",
  value = "",
  removeRadio = () => null,
}) {
  return (
    <div className='hover:bg-gray-300 dark:hover:bg-white/5 p-2 rounded-md flex justify-between'>
      <label className="label w-full">
        <input value={value} type="radio" className="radio" />
        {label}
      </label>

      <button onClick={removeRadio} className='btn btn-error btn-outline btn-square'>
        <LuTrash />
      </button>
    </div>
  )
}

export default function FeedbackFormRadioGroup({ groupName }) {
  const [radioCount, setRadioCount] = useState(1);
  function addRadioInput() {
    setRadioCount(prev => prev++)
  }

  const removeRadioInput = () => setRadioCount(prev => prev--)

  return (
    <section className='mt-6'>
      <div className=''>
        {[...Array(radioCount)].map((_, idx) => (
          <FeedbackFormRadio
            key={idx}
            name={groupName}
            addRadio={addRadioInput}
            removeRadio={removeRadioInput}
          />
        ))}
      </div>
      <button onClick={handler} className='mt-4 btn btn-accent btn-dash btn-sm'>
        <LuPlus size={24} />
        Add Option
      </button>
    </section>
  )
}