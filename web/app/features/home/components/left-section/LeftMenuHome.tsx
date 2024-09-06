import { useState } from 'react'
import { Link, useOutletContext } from '@remix-run/react'
import { cn } from '@/core/utils/cn'
import Image from '@/core/components/Image'
import feeds from '@/assets/images/feeds.png'
import { ChevronDown, ChevronUp } from 'lucide-react'
import NavbarIcon from '@/core/components/feature-icons/NavbarIcon'
import FeatureIconV10 from '@/core/components/feature-icons/FeatureIconV10'
import FeatureIconV12 from '@/core/components/feature-icons/FeatureIconV12'
import { User } from '@/core/apis/user'

interface NavbarProps {
  className?: string
}

function LeftMenuHome({ className }: NavbarProps) {
  const [isToggle, setIsToggle] = useState(false)

  const { me } = useOutletContext<{ me: User }>()

  const MENUS = [
    {
      label: me?.fullName,
      link: '/',
      icon: <Image src={me?.avatar} alt="avatar" className="size-9 rounded-full object-cover" />
    },
    { label: 'Friends', link: '/friends', icon: <NavbarIcon name="friends" /> },
    {
      label: 'Memories',
      link: '/onthisday',
      icon: <NavbarIcon name="memories" />
    },
    {
      label: 'Saved',
      link: '/saved',
      icon: <NavbarIcon name="saved" />
    },
    {
      label: 'Group',
      link: '/groups',
      icon: <NavbarIcon name="group" />
    },
    {
      label: 'Video',
      link: '/video',
      icon: <NavbarIcon name="video" />
    },
    {
      label: 'Ads Manager',
      link: '/adsmanager'
    },
    {
      label: 'Climate Science Center',
      link: '/climatesciencecenter'
    },
    {
      label: 'Events',
      link: '/events',
      icon: <FeatureIconV10 name="Event" size="size-9" />
    },
    {
      label: 'Feeds',
      link: '/feeds',
      icon: <Image src={feeds} alt="feeds" />
    },
    {
      label: 'Fundraisers',
      link: '/fundraisers',
      icon: <NavbarIcon name="fundraisers" />
    },
    {
      label: 'Gaming Video',
      link: '/gamingvideo'
    },
    {
      label: 'Marketplace',
      link: '/marketplace',
      icon: <NavbarIcon name="marketplace" />
    },
    {
      label: 'Messenger',
      link: '/messenger',
      icon: <FeatureIconV12 name="Messenger" size="size-9" />
    },
    {
      label: 'Messenger Kids',
      link: '/messengerkids'
    },
    {
      label: 'Meta Business Suite',
      link: '/metabusinesssuite'
    },
    {
      label: 'Pages',
      link: '/pages',
      icon: <NavbarIcon name="pages" />
    },
    {
      label: 'Play games',
      link: '/Playgames',
      icon: <NavbarIcon name="playGames" />
    },
    {
      label: 'Recent ad activity',
      link: '/recentadactivity'
    }
  ]

  return (
    <div className={cn('px-3', className)}>
      {MENUS.map((menu, item) => {
        let isHidden = false
        if (!isToggle && item > 5) {
          isHidden = true
        }
        return (
          <div key={menu.link}>
            <Link
              to={menu.link}
              className={cn('flex items-center gap-4 rounded-lg p-2 font-semibold hover:bg-gray-200', {
                hidden: isHidden
              })}
            >
              {menu.icon}
              {menu.label}
            </Link>
          </div>
        )
      })}
      <div
        className="group/item relative flex flex-row items-center gap-4 rounded-xl p-2 font-normal hover:bg-gray-200"
        onClick={() => setIsToggle(!isToggle)}
      >
        <div className="flex items-center rounded-full bg-gray-200 p-2.5 group-hover/item:bg-gray-300">
          {isToggle ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
        <h4 className="text-wrap font-semibold">{'Show More'}</h4>
      </div>
    </div>
  )
}
export default LeftMenuHome
