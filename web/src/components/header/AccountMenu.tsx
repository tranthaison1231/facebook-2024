import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import avatar from '@/assets/images/avatar.jpeg'
import { ChevronDown } from 'lucide-react'
import AccountMenuContent from './AccountMenuContent'

function AccountMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="group relative">
          <Avatar className="size-10 cursor-pointer">
            <AvatarImage src={avatar} />
            <AvatarFallback>
              <span className="sr-only">Loading...</span>
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="absolute -right-1 bottom-0.5 size-4 cursor-pointer rounded-full border-2 border-white bg-gray-300" />
          <div className="absolute -bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-lg bg-gray-700 p-1 text-xs text-white group-hover:block">
            Account
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-90 p-2">
        <AccountMenuContent />
      </PopoverContent>
    </Popover>
  )
}

export default AccountMenu
