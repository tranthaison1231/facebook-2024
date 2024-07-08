import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
export default function Home() {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-4 h-screen max-w-[500px] ">
      <CreatePost />
      <PostList />
    </div>
  );
}
