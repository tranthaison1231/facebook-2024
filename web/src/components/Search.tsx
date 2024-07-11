import { forwardRef } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface SearchProps {
  valueInput?: string;
  placeholderValue?: string;
  noHidden?: boolean;
  disabled?: boolean;
  style?: string;
  onclick?: () => void;
  onchange?: () => void;
}

function Search({
  placeholderValue,
  disabled,
  valueInput,
  noHidden,
  style,
  onclick
}: SearchProps,ref:any) {
  return (
    <div
      className={cn("flex flex-row justify-center items-center grow px-2 gap-2 text-base", style)}
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
          "bg-gray-100 placeholder:font-normal placeholder:text-gray-600 rounded-full -ml-10 py-2 pl-8 lg:block hidden w-full font-normal focus:outline-none",
          {
            block: noHidden,
          }
        )}
      />
    </div>
  );
}

export default forwardRef(Search);
