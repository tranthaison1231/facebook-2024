import { Ellipsis, SearchIcon } from "lucide-react";
import FriendRequestItem from "./FriendRequestItem";
import ContactItem from "./ContactItem";
function RightSection() {
  return (
    <div className="fixed right-1 w-1/4 h-dvh flex flex-col z-10 pt-4 pl-4 pr-2 space-y-1 children:pb-3 children:justify-between children:border-gray-300 children:border-b overflow-y-hidden hover:overflow-y-auto">
      <div className="flex flex-row items-center px-2 ">
        <h4 className="text-gray-600 font-semibold">Your Pages and profiles</h4>
        <div className="p-2 rounded-full  hover:bg-gray-200 cursor-pointer">
          <Ellipsis className="size-4" />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-between w-full px-2">
          <h4 className="text-gray-600 font-semibold">Friend requests</h4>
          <p className="p-2 text-blue-500 tracking-tighter hover:bg-gray-200 cursor-pointer">
            See all
          </p>
        </div>
        <div className="w-full">
          <FriendRequestItem />
          <FriendRequestItem />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between w-full my-1 px-2">
          <h4 className="text-gray-600 font-semibold">Contacts</h4>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <SearchIcon className="size-4" />
          </div>
        </div>
        <div className="w-full">
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between w-full my-1 px-2">
          <h4 className="text-gray-600 font-semibold">Your community chats</h4>
        </div>
        <div className="w-full">
          <ContactItem />
          <ContactItem />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
