interface RadioProps {
  title: string
  content?: string
}

function Radio({ title, content }: RadioProps) {
  const id = crypto.randomUUID()
  return (
    <div className="flex items-center justify-between gap-4 rounded-md p-2 hover:bg-gray-200">
      <label htmlFor={id} className="flex flex-1 flex-col">
        <p className="font-semibold leading-5">{title}</p>
        <p className="text-xs font-normal">{content}</p>
      </label>
      <>
        <input id={id} type="radio" name="radio" className="size-5" onFocus={() => console.log('focus')} />
      </>
    </div>
  )
}

export default Radio
