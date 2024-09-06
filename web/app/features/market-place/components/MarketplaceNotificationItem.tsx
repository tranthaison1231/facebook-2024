import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/core/components/Image'
import { Ellipsis } from 'lucide-react'

export default function MarketplaceNotificationItem() {
  return (
    <div className="group flex items-center gap-2 rounded-lg py-2 pl-12 pr-4 hover:bg-gray-100">
      <Image src={avatar} alt={avatar} className="size-12 rounded-lg" />
      <div className="grow">
        <h4 className="font-semibold">Son Tung</h4>
        <p className="text-gray-500">Hai sent an attachment</p>
      </div>
      <div>
        <p className="block text-xs text-gray-500 group-hover:hidden">14/7/2024</p>
        <Ellipsis className="hidden text-gray-500 group-hover:block" />
      </div>
    </div>
  )
}
