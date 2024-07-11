import { Ellipsis, X, MessageSquare, ThumbsUp, MessageSquareShare } from "lucide-react";
import Like from "../assets/svgs/like.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Image from "./Image";

import avatar from "../assets/images/sontung.jpeg";
function PostList() {
  return (
      <div className="bg-white flex flex-col space-y-2 rounded-lg shadow-md w-[590px]">
        <div className="px-3 pt-4">
          <div className="flex items-center justify-between mb-4 ">
            <div className="flex items-center space-x-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-10 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">Son Tung</p>
                <p className="text-gray-500 text-xs">Posted 2 hours ago</p>
              </div>
            </div>
            <div className="text-gray-500 cursor-pointer pr-1">
              <button className="hover:bg-gray-50 rounded-full mx-1">
                <Ellipsis className="size-6" />
              </button>
              <button className="hover:bg-gray-50 rounded-full mx-1">
                <X className="size-6" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-800">
              Just another day with adorable kittens! 🐱{" "} 
            </p>
            <a href="" className="text-blue-500">
                #CuteKitten
              </a>{" "}
              <a href="" className="text-blue-500">
                #AdventureCat
              </a>
          </div>
        </div>
        <div>
          <Image
            src={avatar}
            alt="Post Image"
            className="w-full object-cover border-gray-300"
          />
        </div>
        <div className="flex items-center justify-between text-gray-500 px-5">
          <div className="flex justify-center items-center">
            <Like className="size-5 -mr-1 z-10 border-2 rounded-full border-white" />
            <Heart className="size-5 border-2 rounded-full border-white " />
            <p className="px-2">42 Likes</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>9 Comments</p>
          </div>
        </div>
        <div className="px-4">
          <hr className="my-1" />
          <div className="flex justify-around children:py-2 children:rounded-lg children:font-semibold children:text-gray-400 children:grow children:flex children:items-center children:gap-1 children:justify-center">
            <button className="hover:bg-gray-100"><ThumbsUp className="size-[20px]"/>Like</button>
            <button className="hover:bg-gray-100"><MessageSquare className="size-[20px]"/>Comment</button>
            <button className="hover:bg-gray-100"><MessageSquareShare className="size-[20px]"/>Share</button>
          </div>
          <hr className="my-1" />
          <div className="mt-4">
            <div className="flex space-x-1 my-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-6 rounded-full"
              />
              <div className="bg-gray-100 rounded-3xl py-2 px-4 w-fit">
                <p className="text-gray-800 font-semibold">Jane Smith</p>
                <p className="text-gray-500 text-sm">Lovely shot!</p>
              </div>
            </div>

            <div className="flex space-x-1 my-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-6 rounded-full"
              />
              <div className="bg-gray-100 rounded-3xl py-2 px-4 w-fit">
                <p className="text-gray-800 font-semibold">Bob Johnson</p>
                <p className="text-gray-500 text-sm">
                  I can't handle the cuteness! Where can I get one?
                </p>
              </div>
            </div>

            <div className="flex space-x-1 my-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-6 rounded-full"
              />
              <div className="bg-gray-100 rounded-3xl py-2 px-4 w-fit">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">
                  That little furball is from a local shelter. You should check
                  it out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PostList;
