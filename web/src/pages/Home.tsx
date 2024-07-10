import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="w-full bg-gray-100 grid grid-cols-4 h-screen">
      <div className=" col-span-1 flex flex-col">
        <Navbar />
      </div>
      <div className=" col-span-2 place-self-center">
        <CreatePost />
        <PostList />
      </div>
      <div className=" col-span-1"></div>
    </div>
  );
}
