import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import LeftBar from "../components/LeftBar";
import RightSection from "../components/RightSection/RightSection";
export default function Home() {
  return (
    <div className="w-full bg-gray-100 grid grid-cols-4 h-screen">
      <div className=" col-span-1 flex flex-col">
        <LeftBar />
      </div>
      <div className=" col-span-2 place-self-center">
        <CreatePost />
        <PostList />
      </div>
      <div className=" col-span-1 hidden xl:block relative">
        <RightSection />
      </div>
    </div>
  );
}
