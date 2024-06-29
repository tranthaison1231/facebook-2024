import Ellipsis from "../assets/svgs/ellipsis.svg?react";
import ArrowRight from "../assets/svgs/arrow-right.svg?react";
import Flag from "../assets/svgs/flag.svg?react";
import CheckList from "../assets/svgs/check-list.svg?react";
import Note from "../assets/svgs/note.svg?react";
import DropDown from "../assets/svgs/drop-down-item.svg?react";
import NodeUserItem from "./NodeUserItem";
import Plus from "../assets/svgs/plus.svg?react";
import { X } from "lucide-react";

interface UserItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

function UserItem({ children, onClick }: UserItemProps) {
  return (
    <div className="relative text-[#232D42] rounded-lg  bg-white p-4 shadow-lg font-medium children:flex children:items-center children:pb-4">
      <div
        className="absolute right-1 top-1 text-gray-200 cursor-pointer"
        onClick={onClick}
      >
        <X />
      </div>
      <div className="justify-between">
        <div className="text-xs text-gray-400 flex items-center">
          Dashboard plan
          <span>
            <ArrowRight />
          </span>
          List
        </div>
        <Ellipsis className="hover:fill-black" />
      </div>
      <p>{children}</p>
      <div className="hover:children:stroke-[#8A92A6] justify-start space-x-3">
        <Flag />
        <CheckList />
        <Note />
        <DropDown />
      </div>
      <div>
        <NodeUserItem className="text-[#444FBB] z-0">AT</NodeUserItem>
        <NodeUserItem className="text-[#E57D44] z-10 -ml-2">WE</NodeUserItem>
        <NodeUserItem className="text-[#237635] z-20 -ml-2">GK</NodeUserItem>
        <NodeUserItem className="fill-[#C33E2E] z-30 -ml-2">
          <Plus className="m-[6px]" />
        </NodeUserItem>
      </div>
    </div>
  );
}
export default UserItem;
