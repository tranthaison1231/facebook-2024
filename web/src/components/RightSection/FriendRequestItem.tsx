import avatar from "../../assets/images/sontung.jpeg";
import Image from "../Image";
import Button from "../Button";
function FriendRequestItem() {
  return (
    <div className="flex flex-row items-center rounded-xl font-normal w-full p-1.5 hover:bg-gray-200">
      <div className="flex-none">
        <Image className="size-[60px] rounded-full" src={avatar} alt={avatar} />
      </div>
      <div className="grow pl-3 ">
        <h4 className="line-clamp-1 font-semibold text mb-1">Son Tung</h4>
        <div className="flex flex-row justify-between items-center gap-2">
          <Button style="basis-1/2">Confirm</Button>
          <Button style="bg-zinc-300 hover:bg-zinc-400 text-black basis-1/2">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FriendRequestItem;
