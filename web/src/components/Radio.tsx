import {v4 as uuidv4} from "uuid";
interface RadioProps {
  title: string;
  content: string;
}

function Radio({ title, content }: RadioProps) {
  const id = uuidv4();
  return (
    <div className="flex items-center justify-between gap-4 px-2 py-3 rounded-md hover:bg-gray-200">
      <label htmlFor={id} className="flex flex-col flex-1">
        <p>{title}</p>
        <p className="font-normal text-xs">{content}</p>
      </label>
      <>
        <input
          id={id}
          type="radio"
          name="radio"
          className="size-5"
          onFocus={() => console.log("focus")}
        />
      </>
    </div>
  );
}

export default Radio;
