import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import avatar from "../assets/images/avatar.png";
import HeaderMenu from "./HeaderMenu";
import HeaderBar from "./HeaderBar";
import Search from "./Search";
import SearchItem from "./SearchItem";
import logoFacebook from "../assets/images/logo-facebook.png";
import Image from "./Image";
import { ArrowLeft } from "../assets/svgs";
import { useClickOutside } from "../hooks/useClickOutSize";

export default function Header() {
  const [SearchToggle, setSearchToggle] = useState(false);
  const ref = useRef(null);
  useClickOutside({ ref, onClickOutside: () => setSearchToggle(false) });

  return (
    <header className="grid grid-cols-4  place-items-center justify-between fixed h-14 bg-white z-9999 w-full">
      <div className=" col-span-1 flex items-center relative pl-5 justify-self-start">
        <Link to="/">
          <Image
            src={logoFacebook}
            alt="avatar"
            className="rounded-full size-10"
          />
        </Link>
        <Search onclick={() => setSearchToggle(!SearchToggle)} placeholderValue="Search" />
        {SearchToggle && (
          <div
            ref={ref}
            className="absolute bg-white border-1 w-[340px] top-0 left-0 z-50 rounded-lg shadow-lg flex flex-col"
          >
            <div className="flex items-center justify-start my-2 pr-2 pl-3 gap-2">
              <ArrowLeft
                className="size-6 hover:bg-gray-100 rounded-full p-1.5 scale-150"
                onClick={() => setSearchToggle(false)}
              />
              <Search noHidden />
            </div>
            <div className="flex items-center justify-between px-2">
              <h4 className="font-semibold px-3">Recently</h4>
              <p className="text-sm px-2 py-1 text-blue-500 hover:bg-gray-100">
                Edit
              </p>
            </div>
            <div>
              <SearchItem image={avatar} name="John Doe" username="johndoe" />
              <SearchItem image={avatar} name="John Doe" username="johndoe" />
              <SearchItem image={avatar} name="John Doe" username="johndoe" />
              <SearchItem image={avatar} name="John Doe" username="johndoe" />
              <SearchItem image={avatar} name="John Doe" username="johndoe" />
            </div>
          </div>
        )}
      </div>
      <div className="col-span-2 place-self-center">
        <HeaderBar />
      </div>
      <div className="col-span-1 justify-self-end"><HeaderMenu /></div>
    </header>
  );
}
