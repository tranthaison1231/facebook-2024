import { SearchIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface SearchProps {
  noHidden?: boolean;
  onclick?: () => void;
}

function Search({ noHidden, onclick }: SearchProps) {
  return (
    <div
      className="flex flex-row justify-center items-center grow px-2 gap-2"
      onClick={onclick}
    >
      <div className="bg-gray-100 rounded-full size-10 flex items-center justify-center ">
        <SearchIcon className="size-4 z-10" />
      </div>
      <input
        type="text"
        placeholder="Looking on Facebook"
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

export default Search;
