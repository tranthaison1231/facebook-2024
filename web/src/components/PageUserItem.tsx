import Image from "./Image";
import { Spin } from "../assets/svgs";
interface PageItemUserProps {
  avatar: string;
}
function PageUserItem({ avatar }: PageItemUserProps) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md m-1 group">
      <div className="relative ">
        <Spin className="size-9 text-gray-500 group-hover:rotate-180 duration-500" />
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full size-7 border-2"
          src={avatar}
          alt="avatar"
        />
      </div>

      <p>John Doe</p>
    </div>
  );
}

export default PageUserItem;
