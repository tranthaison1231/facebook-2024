import Image from "./Image";
import avatar from "../assets/images/sontung.jpeg";
import  Camera  from "../assets/images/camera.png";
import  Picture  from "../assets/images/picture.png";
import  Smile  from "../assets/images/smile.png";


function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow-md my-4 pb-2.5 pt-3 px-4 w-[590px] ">
      <div className="flex justify-start items-center text-lg gap-2">
        <Image
          className="size-10 rounded-full"
          src={avatar}
          alt={avatar}
/>
        <button className="bg-gray-100  min-w-72 text-lg rounded-full flex text-gray-500 w-full p-2.5 hover">
          <p className="pl-2">Tung, what's on your mind?</p>
        </button>
      </div>
      <hr className="my-3"/>
      <div className="w-full flex justify-around  cursor-pointer children:px-4 children:py-2">
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <Image src={Camera} alt="camera"/>
                <p>Live Video</p>
            </div>
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <Image src={Picture} alt="camera"/>
                <p>Images/Videos</p>
            </div>
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <Image src={Smile} alt="camera"/>
                <p>Emotions/Activities</p>
            </div>
        </div>
    </div>
  );
}

export default CreatePost;
