import { useState } from "react";

import FeatureIconV3 from "../../FeatureIcon/FeatureiconV3";
import {default as NotificationItem} from "./Item";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";

function NotificationDropDown() {
  const [showAllInfo, setShowAllInfo] = useState({ all: true, notRead: false });
  return (
    <div className="text-sm font-semibold absolute z-10 bg-white w-96 pt-2 top-10 mt-1 text-gray-700 shadow-2xl border-[1px] right-4 max-h-[90vh] overflow-y-auto rounded-xl">
      <div className="flex justify-between items-center font-bold mb-2 mx-2 px-2">
        <h1 className="text-2xl">Notification</h1>
        <div className="flex items-center p-2 rounded-full hover:bg-gray-100 cursor-pointer relative">
          <FeatureIconV3 name="Ellipsis" />
        </div>
      </div>
      <div className="flex items-center gap-2 mx-2 px-2">
        <p
          onClick={() => setShowAllInfo({ all: true, notRead: false })}
          className={cn(
            "hover:bg-gray-100 rounded-full p-2 cursor-pointer text-center min-w-12",
            { "text-blue-500 bg-blue-50 hover:bg-blue-100": showAllInfo.all }
          )}
        >
          All
        </p>
        <p
          onClick={() => setShowAllInfo({ all: false, notRead: true })}
          className={cn(
            "hover:bg-gray-100 rounded-full p-2 text-center cursor-pointer",
            {
              "text-blue-500 bg-blue-50 hover:bg-blue-100": showAllInfo.notRead,
            }
          )}
        >
          Not read
        </p>
      </div>
      <div className="gap-2 mb-2 mx-2 px-2">
        <div className="flex items-center justify-between">
          <h3>New</h3>
          <Link
            to="/notifications"
            className="font-normal text-blue-500 hover:bg-gray-100 p-2"
          >
            Show all
          </Link>
        </div>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
      </div>
    </div>
  );
}

export default NotificationDropDown;
