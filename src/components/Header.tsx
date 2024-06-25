import message from "../assets/images/message.png";
import notification from "../assets/images/notification.png";
import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";
import imguk from "../assets/images/imguk.png";
import ArrowLeft from "../assets/svgs/arrow-left.svg?react";
import { cn } from "../utils/cn";

interface HeaderProps {
  isToggle: boolean;
  onToggle: () => void;
}

export default function Header({ isToggle, onToggle }: HeaderProps) {
  return (
    <section className="flex fixed bg-white z-9999 w-full">
      <div
        className={cn(
          "w-[260px] relative flex items-center justify-center gap-4",
          {
            "w-32": isToggle,
          },
        )}
      >
        <img src={logo} alt="logo" />
        {!isToggle ? (
          <h2 className="text-3xl font-bold"> Hope UI</h2>
        ) : undefined}

        <div
          onClick={onToggle}
          className={cn(
            "absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer bg-[#3A57E8] rounded-full flex items-center justify-center",
            {
              "rotate-180": isToggle,
            },
          )}
        >
          <ArrowLeft />
        </div>
      </div>
      <div className="flex justify-between flex-1 px- py-4">
        <input
          className="pl-8 w-80 h-9 outline-none "
          type="search"
          placeholder="Search"
          name="search"
        />
        <div className="flex justify-end md:mt-0 space-x-6 rtl:space-x-reverse">
          <img className="size-8" src={imguk} alt="imguk"></img>
          <img className="size-8" src={message} alt="message"></img>
          <img className="size-8" src={notification} alt="notification"></img>
          <img className="size-8" src={avatar} alt="avatar"></img>
          <h1>Austin Robertson</h1>
          <p>Marketing Administrator</p>
        </div>
      </div>
    </section>
  );
}
