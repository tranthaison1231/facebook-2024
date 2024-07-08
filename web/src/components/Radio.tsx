interface RadioProps {
  title: string;
  content: string;
}

function Radio({ title,content }: RadioProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-gray-200">
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="font-normal text-xs">{content}</p>
      </div>
      <div>
          <input
            type="radio"
            name="radio"
            className="size-5"
            onFocus={() => console.log("focus")}
          />
      </div>
    </div>
  );
}

export default Radio;
