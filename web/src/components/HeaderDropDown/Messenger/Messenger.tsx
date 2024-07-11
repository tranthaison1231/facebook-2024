import { useState } from "react";

import { cn } from "../../../utils/cn";
import Search from "../../Search";
import FeatureIconV9 from "../../FeatureIcon/FeatureIconV9";
import FeatureIconV3 from "../../FeatureIcon/FeatureIconV3";
import { default as MessengerItem } from "./Item";
function MessengerDropDown() {
  const [View, setView] = useState({ inbox: true, notRead: false });
  return (
    <div className="text-sm font-semibold absolute z-10 bg-white w-96 pt-2 top-10 mt-1 text-gray-900 shadow-2xl border right-4 max-h-[90vh] overflow-hidden rounded-xl">
      <div className="flex justify-between items-center font-bold mb-1 mx-2 px-2">
        <h1 className="text-2xl">Message</h1>
        <div className="flex items-center space-x-3 children:flex children:items-center children:p-1.5 children:opacity-60 children:rounded-full children:cursor-pointer children:relative">
          <div className=" hover:bg-gray-100">
            <FeatureIconV3 name="Ellipsis" />
          </div>
          <div className=" hover:bg-gray-100">
            <FeatureIconV9 name="ShowAll" />
          </div>
          <div className=" hover:bg-gray-100">
            <FeatureIconV9 name="NewMessage" size="size-4" />
          </div>
        </div>
      </div>
      <Search style="px-4 py-2" placeholderValue="Search on Messenger" />
      <div className="flex items-center gap-2 mx-2 px-2 pb-2">
        <p
          onClick={() => setView({ inbox: true, notRead: false })}
          className={cn(
            "hover:bg-gray-100 rounded-full p-2 cursor-pointer text-center min-w-12",
            { "text-blue-500 bg-blue-50 hover:bg-blue-100": View.inbox }
          )}
        >
          Inbox
        </p>
        <p
          onClick={() => setView({ inbox: false, notRead: true })}
          className={cn(
            "hover:bg-gray-100 rounded-full p-2 text-center cursor-pointer",
            {
              "text-blue-500 bg-blue-50 hover:bg-blue-100": View.notRead,
            }
          )}
        >
          Community
        </p>
      </div>
      <div className="gap-2 px-3 max-h-[62vh] overflow-auto">
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
      </div>
      <div className="text-center text-blue-500 cursor-pointer h-14 py-3 border-t hover:underline">
        Show all in Messenger
      </div>
    </div>
  );
}

export default MessengerDropDown;
