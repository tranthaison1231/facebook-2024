import { forwardRef } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface SearchProps {
  valueInput?: string;
  placeholderValue?: string;
  noHidden?: boolean;
  disabled?: boolean;
  onclick?: () => void;
  onchange?: () => void;
}

function Search({
  placeholderValue,
  disabled,
  valueInput,
  noHidden,
  onclick
}: SearchProps,ref:any) {
  return (
    <div
      className="flex flex-row justify-center items-center grow px-2 gap-2 text-base"
      onClick={onclick}
    >
      <div className="bg-gray-100 rounded-full size-10 flex items-center justify-center ">
        <SearchIcon className="size-4 z-10" />
      </div>
      <input
        ref={ref}
        disabled={disabled}
        type="text"
        value={valueInput}
        placeholder={placeholderValue}
        className={cn(
          "bg-gray-100  rounded-full -ml-10 py-2 pl-8 xl:block hidden w-full focus:outline-none",
          {
            block: noHidden,
          }
        )}
      />
    </div>
  );
}

export default forwardRef(Search);
