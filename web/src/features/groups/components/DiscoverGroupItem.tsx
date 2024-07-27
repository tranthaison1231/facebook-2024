import { cn } from '@/utils/cn'
import avatar from '@/assets/images/avatar.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DiscoverGroupItemProps {
  title: string
  members: string
  friends: string
  postsPerDay: string
  image: string
  className?: string
}

export default function DiscoverGroupItem({
  title,
  members,
  friends,
  postsPerDay,
  image,
  className
}: DiscoverGroupItemProps) {
  return (
    <div className={cn('rounded-xl border border-gray-300 shadow-thin', className)}>
      <div className="relative h-44">
        <a href="#test">
          <img src={image} alt={image} className="h-full w-full rounded-t-lg object-cover" />
        </a>
        <Button
          size={'icon'}
          className="absolute right-2.5 top-2.5 bg-black p-1 text-xs text-white opacity-30 hover:bg-gray-900"
        >
          <X />
        </Button>
      </div>
      <div className="p-4">
        <a href="#test">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <div className="mb-3 flex flex-row items-center gap-1 text-sm text-gray-700">
          <p className="">{members}</p>
          <p>.</p>
          <p>{postsPerDay}</p>
        </div>
        <div className="my-2 flex flex-row items-center gap-2">
          <div className="flex flex-row items-center">
            <Avatar className="size-8 border-2 border-white">
              <AvatarImage src={avatar} alt={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-3 size-8 border-2 border-white">
              <AvatarImage src={avatar} alt={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm">{friends}</div>
        </div>
        <Button variant={'secondary'} className="w-full">
          Join group
        </Button>
      </div>
    </div>
  )
}
