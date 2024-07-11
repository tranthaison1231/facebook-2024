import Image from "../../Image";
import avatar from "../../../assets/images/sontung.jpeg";
import { Ellipsis } from "lucide-react";

function Item() {
  return (
    <div className="flex flex-row items-center p-2 rounded-xl font-normal relative group hover:bg-gray-200 has-[button:hover]:bg-white">
      <div className="flex-none">
        <Image className="size-14 rounded-full" src={avatar} alt={avatar} />
      </div>
      <div className="flex flex-col grow overflow-hidden pl-2">
        <h4 className="font-semibold truncate">
          FPT Software Innovation Career | FPT University
        </h4>
        <p className="truncate">
          Hot JOBS cơ hội cho ứng viên được tham gia các dự án lớn
        </p>
      </div>
      <div className="size-3 bg-blue-500 rounded-full flex-none"></div>
      <button className="absolute bg-white rounded-full border border-gray-300  text-gray-600 text-xs p-1.5 hidden group-hover:block right-5 -translate-x-5 z-20 hover:bg-gray-100">
        <Ellipsis/>
      </button>
    </div>
  );
}

export default Item;
