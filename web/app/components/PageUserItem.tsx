import { Spin } from '../assets/svgs'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface PageItemUserProps {
  avatar?: string
}

function PageUserItem({ avatar }: PageItemUserProps) {
  return (
    <div className="group m-1 flex items-center gap-2 rounded-md p-2 hover:bg-gray-200">
      <div className="relative">
        <Spin className="size-9 text-gray-500 transition duration-500 group-hover:animate-spint-once" />
        <Avatar className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <span className="sr-only">Loading...</span>
          </AvatarFallback>
        </Avatar>
      </div>
      <p>John Doe</p>
    </div>
  )
}

export default PageUserItem
