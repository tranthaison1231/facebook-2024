import Image from "./Image";
import avatar from "../assets/images/sontung.jpeg";
import  Camera  from "../assets/images/camera.png";
import  Picture  from "../assets/images/picture.png";
import  Smile  from "../assets/images/smile.png";


function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow-md pb-2.5 pt-3 px-4 ">
      <div className="flex justify-start items-center text-lg gap-2">
        <Image
          className="size-[40px] rounded-full"
          src={avatar}
          alt="SonTung"
/>
        <button className="bg-gray-100  min-w-72 text-lg rounded-full flex  w-full p-2.5 hover">
          <p className="pl-2">Hiếu ơi, bạn đang nghĩ gì thế?</p>
        </button>
      </div>
      <hr className="my-3"/>
      <div className="w-full grid grid-cols-3 gap-1 cursor-pointer children:p-2">
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <img src={Camera} alt="camera"/>
                <p>Live Video</p>
            </div>
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <img src={Picture} alt="camera"/>
                <p>Image/Video</p>
            </div>
            <div className="flex flex-row items-center gap-2 hover:bg-gray-100 rounded-lg">
                <img src={Smile} alt="camera"/>
                <p>Emotion/Activity</p>
            </div>
        </div>
    </div>
  );
}

export default CreatePost;
