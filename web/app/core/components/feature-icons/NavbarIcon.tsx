import { cn } from '@/core/utils/cn'
import NavbarIconsImages from '@/assets/images/navbar-icon.png'

interface NavbarIconProps {
  name: 'friends' | 'memories' | 'saved' | 'group' | 'video' | 'pages' | 'fundraisers' | 'marketplace' | 'playGames'
  size?: string
}

export default function NavbarIcon({ name, size }: NavbarIconProps) {
  const icons = {
    friends: {
      backgroundPosition: '0px -259px'
    },
    memories: {
      backgroundPosition: '0px -407px'
    },
    saved: {
      backgroundPosition: '0px -148px'
    },
    group: {
      backgroundPosition: '0px -37px'
    },
    video: {
      backgroundPosition: '0px -481px'
    },
    pages: {
      backgroundPosition: '0px -111px'
    },
    fundraisers: {
      backgroundPosition: '0px -296px'
    },
    marketplace: {
      backgroundPosition: '0px -370px'
    },
    playGames: {
      backgroundPosition: '0px -74px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${NavbarIconsImages})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-9 bg-no-repeat', size)}
    ></i>
  )
}
