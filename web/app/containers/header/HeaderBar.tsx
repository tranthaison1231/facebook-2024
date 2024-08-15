import { useLocation, Link } from '@remix-run/react'
import { cn } from '@/utils/cn'
import { Home, Market, Group, Game } from '@/assets/svgs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const HEADER_BARS = [
  {
    name: 'Home',
    icon: <Home />,
    path: '/'
  },
  {
    name: 'Marketplace',
    icon: <Market />,
    path: '/marketplace'
  },
  {
    name: 'Groups',
    icon: <Group />,
    path: '/groups/feed'
  },
  {
    name: 'Gaming',
    icon: <Game />,
    path: '/gaming'
  }
]

function HeaderBar() {
  const location = useLocation()
  return (
    <div className="flex flex-row items-center gap-2">
      {HEADER_BARS.map(bar => (
        <TooltipProvider key={bar.name} delayDuration={100} skipDelayDuration={100}>
          <Tooltip>
            <TooltipTrigger
              className={cn('border-b-4 border-transparent', { 'border-b-[#0866ff]': location.pathname === bar.path })}
            >
              <Link to={bar.path}>
                <div
                  className={cn('rounded-lg px-10 py-3', {
                    'hover:bg-gray-100': location.pathname !== bar.path
                  })}
                >
                  {bar.icon}
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{bar.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

export default HeaderBar
