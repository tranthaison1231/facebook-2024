import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/core/components/Image'
import { Button } from '@/core/components/ui/button'
import { Ellipsis } from 'lucide-react'

export default function () {
  return (
    <div className="rounded-xl border-gray-300 bg-white p-4 shadow">
      <div className="flex flex-row items-center gap-4">
        <Image src={avatar} alt={avatar} className="size-20 rounded-lg" />
        <div>
          <h5 className="font-semibold">Cộng đồng fan Sơn Tùng</h5>
          <p className="text-xs text-gray-500">Request to join 28 weeks ago</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button className="mt-4 w-full grow">Accept</Button>
        <Button variant={'secondary'} className="mt-4 w-fit">
          <Ellipsis />
        </Button>
      </div>
    </div>
  )
}
