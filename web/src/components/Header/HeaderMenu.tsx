import { useReducer, useRef } from "react";

import avatar from "../../assets/images/sontung.jpeg";
import { useClickOutside } from "../../hooks/useClickOutSize";
import Image from "../Image";
import { Bell, Messenger, Menu } from "../../assets/svgs";
import { ChevronDown } from "lucide-react";
import { default as HeaderAccountDropDown } from "../HeaderDropDown/Account/AccountMenu";
import { default as HeaderNotificationDropDown } from "../HeaderDropDown/Notification/Notification";
import { default as MessengerDropDown } from "../HeaderDropDown/Messenger/Messenger";
import { default as HeaderMenuDropDown } from "../HeaderDropDown/Menu/DashboardMenu";
const MENUS = [
  {
    title: "Menu",
    icon: <Menu className="size-5" />,
    onclick: () => showMenuAction(),
  },
  {
    title: "Message",
    icon: <Messenger className="size-5" />,
    onclick: () => showMessageAction(),
  },
  {
    title: "Notification",
    icon: <Bell className="size-5" />,
    onclick: () => showNotificationAction(),
  },
];

const initalShowDropDown = {
  isToggle: false,
  showNotification: false,
  showMessage: false,
  showMenu: false,
  showAccount: false,
};
const showReducer = (state: any, action: any) => {
  switch (action.type) {
    case "hideAll":
      return initalShowDropDown;
    case "showNotification":
      return {
        ...initalShowDropDown,
        isToggle: true,
        showNotification: !state.showNotification,
      };
    case "showMessage":
      return {
        ...initalShowDropDown,
        isToggle: true,
        showMessage: !state.showMessage,
      };
    case "showMenu":
      return {
        ...initalShowDropDown,
        isToggle: true,
        showMenu: !state.showMenu,
      };
    case "showAccount":
      return {
        ...initalShowDropDown,
        isToggle: true,
        showAccount: !state.showAccount,
      };
    default:
      return state;
  }
};
const hideAllAction = () => {
  return {
    type: "hideAll",
  };
};
const showAccountAction = () => {
  return {
    type: "showAccount",
  };
};
const showMenuAction = () => {
  return {
    type: "showMenu",
  };
};
const showNotificationAction = () => {
  return {
    type: "showNotification",
  };
};
const showMessageAction = () => {
  return {
    type: "showMessage",
  };
};
function HeaderMenu() {
  const [showDropDown, dispatch] = useReducer(showReducer, initalShowDropDown);
  const ref = useRef(null);
  useClickOutside({ ref, onClickOutside: () => dispatch(hideAllAction()) });
  return (
    <div ref={ref} className="flex gap-2 items-center pr-4 relative">
      {MENUS.map((menu) => (
        <div
          onClick={() => dispatch(menu.onclick())}
          key={menu.title}
          className="flex items-center gap-2 p-2.5 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer relative group"
        >
          {menu.icon}
          <div className="absolute -top-1.5 -right-2 size-5 bg-rose-500  rounded-full flex items-center justify-center text-white text-xs">
            3
          </div>
          <div className="absolute bg-gray-700 rounded-lg -bottom-8  text-white text-xs p-1 hidden group-hover:block -translate-x-1/2 left-1/2 z-20">
            {menu.title}
          </div>
        </div>
      ))}
      <div
        className="relative group"
        onClick={() => dispatch(showAccountAction())}
      >
        <Image
          src={avatar}
          className="size-10 cursor-pointer rounded-full"
          alt="avatar"
        />
        <ChevronDown className="size-4 cursor-pointer bottom-0.5 -right-1 absolute bg-gray-300 border-2 border-white rounded-full" />
        <div className="absolute bg-gray-700 rounded-lg -bottom-8 text-white text-xs p-1 hidden group-hover:block -translate-x-1/2 left-1/2 z-20">
          Account
        </div>
      </div>
      {showDropDown.isToggle && showDropDown.showMenu && <HeaderMenuDropDown />}
      {showDropDown.isToggle && showDropDown.showMessage && (
        <MessengerDropDown />
      )}
      {showDropDown.isToggle && showDropDown.showNotification && (
        <HeaderNotificationDropDown />
      )}
      {showDropDown.isToggle && showDropDown.showAccount && (
        <HeaderAccountDropDown />
      )}
    </div>
  );
}

export default HeaderMenu;
