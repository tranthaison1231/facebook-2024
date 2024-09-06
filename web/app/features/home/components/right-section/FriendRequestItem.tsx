import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/core/components/Image'
import { Button } from '@/core/components/ui/button'

function FriendRequestItem() {
  return (
    <div className="flex w-full flex-row items-center rounded-xl p-1.5 font-normal hover:bg-gray-200">
      <div className="flex-none">
        <Image className="size-[48px] rounded-full" src={avatar} alt={avatar} />
      </div>
      <div className="-mt-2 grow pl-3">
        <div className="flex items-center justify-between">
          <h4 className="text mb-1 line-clamp-1 font-semibold">Son Tung</h4>
          <p className="text-xs">5d</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <Button className="basis-1/2" size={'sm'}>
            Confirm
          </Button>
          <Button className="basis-1/2 bg-zinc-300 text-black hover:bg-zinc-400" size={'sm'}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FriendRequestItem
