import { useState } from "react";

import avatar from '../assets/images/avatar.png'
import HeaderMenu from "./HeaderMenu";
import HeaderBar from "./HeaderBar";
import Search from "./Search";
import SearchItem from "./SearchItem";
import logoFacebook from '../assets/images/logo-facebook.png'
import Image from "./Image";
import {ArrowLeft} from '../assets/svgs';

export default function Header() {
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  return (
    <header className="flex justify-between fixed h-14 bg-white z-9999 w-full">
      <div className="flex items-center relative pl-2">
        <Image src={logoFacebook} alt="avatar" className="rounded-full size-10" />
        <Search onclick={() => setIsSearchToggle(!isSearchToggle)} />
        {isSearchToggle && (
          <div
            className="absolute bg-white border-1 w-[340px] top-0 left-0  z-50 rounded-lg shadow-lg flex flex-col"
            onClick={() => setIsSearchToggle(!isSearchToggle)}
          >
            <div className="flex items-center justify-start my-2 pr-2 pl-3 gap-2">
              <ArrowLeft className="size-6 hover:bg-gray-100 rounded-full p-1.5 scale-150" />
              <Search noHidden/>
            </div>
            <div className="flex items-center justify-between px-2">
              <h4 className="font-semibold px-3">Recently</h4>
              <p className="text-sm px-2 py-1 text-blue-500 hover:bg-gray-100">Edit</p>
            </div>
            <div>
              <SearchItem image={avatar} name="John Doe" username="johndoe"/>
              <SearchItem image={avatar} name="John Doe" username="johndoe"/>
              <SearchItem image={avatar} name="John Doe" username="johndoe"/>
              <SearchItem image={avatar} name="John Doe" username="johndoe"/>
              <SearchItem image={avatar} name="John Doe" username="johndoe"/>
            </div>
          </div>
        )}
      </div>
      <div>
        <HeaderBar />
      </div>
      <HeaderMenu />
    </header>
  );
}
