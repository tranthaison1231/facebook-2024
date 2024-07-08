import { Link } from "react-router-dom";
import Image from "../components/Image";
import { X } from "lucide-react";

interface AccountItemProps {
  image: string;
  name: string;
  username: string;
}
function SearchItem({ image, name, username }: AccountItemProps) {
  return (
    <Link
      to={`/@${username}`}
      className="px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 group"
    >
      <Image
        className="rounded-full overflow-hidden inline-block mr-4 object-cover"
        src={image}
        alt={name}
      />

      <div className="text-sm w-full">
        <p className="overflow-ellipsis overflow-hidden font-bold">{name}</p>
        <p className="text-gray-400 text-xs ">{username}</p>
      </div>
      <X className="size-5"/>
    </Link>
  );
}

export default SearchItem;
