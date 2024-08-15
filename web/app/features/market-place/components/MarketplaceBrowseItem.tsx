import Image from '@/components/Image'
import { cn } from '@/utils/cn'

interface MarketplaceBrowseItemProps {
  avatar: string
  price: string
  title: string
  description: string
  className?: string
}

export default function MarketplaceBrowseItem({
  avatar,
  price,
  title,
  description,
  className
}: MarketplaceBrowseItemProps) {
  return (
    <div className={cn('my-1', className)}>
      <Image src={avatar} alt={avatar} className="mb-1 aspect-square w-full rounded-lg object-cover" />
      <h1 className="text-lg font-bold">{price}</h1>
      <p>{title}</p>
      <p className="text-xs text-gray-700">{description}</p>
    </div>
  )
}
