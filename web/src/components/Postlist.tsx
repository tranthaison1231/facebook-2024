import { Ellipsis, X, MessageSquare, ThumbsUp, MessageSquareShare } from "lucide-react";
import Like from "../assets/svgs/like.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Image from "./Image";

import avatar from "../assets/images/avatar.png";
function PostList() {
  return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-3">
          <div className="flex items-center justify-between mb-4 ">
            <div className="flex items-center space-x-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-[40px] rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
              </div>
            </div>
            <div className="text-gray-500 cursor-pointer">
              <button className="hover:bg-gray-50 rounded-full mx-1">
                <Ellipsis className="size-[20px]" />
              </button>
              <button className="hover:bg-gray-50 rounded-full mx-1">
                <X className="size-[20px]" />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-gray-800">
              Just another day with adorable kittens! 🐱{" "} 
            </p>
            <a href="" className="text-blue-600">
                #CuteKitten
              </a>{" "}
              <a href="" className="text-blue-600">
                #AdventureCat
              </a>
          </div>
        </div>

        <div className="mb-4">
          <Image
            src={avatar}
            alt="Post Image"
            className="w-full max-h-[300px] object-cover border-gray-300"
          />
        </div>

        <div className="flex items-center justify-between text-gray-500 px-3">
          <div className="flex justify-center items-center">
            <Like className="size-[20px] -mr-1 z-10 border-[2px] rounded-full border-white" />
            <Heart className="size-[20px] border-[2px] rounded-full border-white " />
            <p className="px-2">42 Likes</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>9</p>
            <MessageSquare className="size-[20px] border-[2px] border-white  text-[#8A92A6]" />
          </div>
        </div>
        <div className="px-4">
          <hr className="my-1" />
          <div className="flex justify-around children:py-2 children:rounded-lg children:font-semibold children:text-gray-400 children:grow children:flex children:items-center children:gap-1 children:justify-center">
            <button className="hover:bg-gray-100"><ThumbsUp className="size-[20px]"/>Thích</button>
            <button className="hover:bg-gray-100"><MessageSquare className="size-[20px]"/>Bình Luận</button>
            <button className="hover:bg-gray-100"><MessageSquareShare className="size-[20px]"/>Chia sẻ</button>
          </div>
          <hr className="my-1" />
          <div className="mt-4">
            <div className="flex bg space-x-2 my-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-[20px] rounded-full"
              />
              <div className="bg-gray-100 rounded-lg p-1 w-full">
                <p className="text-gray-800 font-semibold">Jane Smith</p>
                <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
              </div>
            </div>

            <div className="flex bg space-x-2 my-2">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-6 rounded-full"
              />
              <div className="bg-gray-100 rounded-lg p-1 w-full">
                <p className="text-gray-800 font-semibold">Bob Johnson</p>
                <p className="text-gray-500 text-sm">
                  I can't handle the cuteness! Where can I get one?
                </p>
              </div>
            </div>

            <div className="flex bg space-x-2 my-2 ml-6">
              <Image
                src={avatar}
                alt="User Avatar"
                className="size-6 rounded-full"
              />
              <div className="bg-gray-100 rounded-lg p-1 w-full">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">
                  That little furball is from a local shelter. You should check
                  it out! 🏠😺
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PostList;
