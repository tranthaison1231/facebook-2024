import { Popover, PopoverContent, PopoverTrigger } from '@/core/components/ui/popover'
import { PopoverProps } from '@radix-ui/react-popover'

interface PopoverMenuProps extends PopoverProps {
  icon: JSX.Element
  title: string
  dropdown: JSX.Element
}

export function PopoverMenu({ icon, title, dropdown, open, onOpenChange }: PopoverMenuProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <div className="group relative flex cursor-pointer items-center rounded-full bg-gray-200 p-2.5 hover:bg-gray-300">
          {icon}
          <div className="absolute -right-2 -top-1.5 flex size-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
            3
          </div>
          <div className="absolute -bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-lg bg-gray-700 p-1 text-xs text-white group-hover:block">
            {title}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full shadow-3xl">{dropdown}</PopoverContent>
    </Popover>
  )
}
