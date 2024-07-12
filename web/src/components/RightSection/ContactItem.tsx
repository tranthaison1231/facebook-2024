import avatar from "../../assets/images/sontung.jpeg";
import Image from "../Image";
function ContactItem() {
  return (
    <div className="flex flex-row items-center rounded-xl font-normal p-2 gap-4 w-full hover:bg-gray-200 ">
      <Image className="size-9 rounded-full" src={avatar} alt={avatar}>
        <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-white"></div>
      </Image>
      <p className="font-semibold">Sơn Tùng</p>
    </div>
  );
}

export default ContactItem;
