import FeatureIconV7 from '@/core/components/feature-icons/FeatureIconV7'
import FeatureIconV10 from '@/core/components/feature-icons/FeatureIconV10'
import FeatureIconV11 from '@/core/components/feature-icons/FeatureIconV11'
import FeatureIconV12 from '@/core/components/feature-icons/FeatureIconV12'
import FeatureIconV13 from '@/core/components/feature-icons/FeatureIconV13'
import NewFeed from '@/assets/images/news-feed.png'
import Feeds from '@/assets/images/feeds.png'
import GamingVideo from '@/assets/images/gaming-video.png'
import PlayGame from '@/assets/images/play-games.png'
import Video from '@/assets/images/video.png'
import NavbarIcon from '@/core/components/feature-icons/NavbarIcon'
import MenuItem, { CreateItem } from './MenuItem'
import Image from '@/core/components/Image'
import Search from '@/core/components/Search'
import { Menu } from '@/assets/svgs'
import { PopoverMenu } from './PopoverMenu'
import { useState } from 'react'
import { useCreatePost } from '../../stores/post'

export const SOCIAL_MENUS = [
  {
    title: 'Events',
    logoIcon: <FeatureIconV10 name="Event" />,
    content: 'Organize or find events and other things to do online and nearby'
  },
  {
    title: 'Friends',
    logoIcon: <NavbarIcon name="friends" />,
    content: 'Search for friends or people you may know'
  },
  {
    title: 'Groups',
    logoIcon: <NavbarIcon name="group" />,
    content: 'Connect with people who share your interests'
  },
  {
    title: 'News Feed',
    logoIcon: <Image src={NewFeed} alt={'news-feed'} />,
    content: 'See relevant posts from people and Pages you follow'
  },
  {
    title: 'Feeds',
    logoIcon: <Image src={Feeds} alt={'feeds'} />,
    content: 'See the most recent posts from your friends, groups, Pages, and more.'
  },
  {
    title: 'Pages',
    logoIcon: <NavbarIcon name="pages" />,
    content: 'Discover and connect with business of Facebook'
  }
]

export const ENTERTAINMENT_MENUS = [
  {
    title: 'Gaming Video',
    logoIcon: <Image src={GamingVideo} alt={'gaming-video'} />,
    content: 'Watch and connect with your favourite games and streamers.'
  },
  {
    title: 'Play games',
    logoIcon: <Image src={PlayGame} alt="play-games" />,
    content: 'Play your favourite games'
  },
  {
    title: 'Video',
    logoIcon: <Image src={Video} alt="video" />,
    content: 'A video destination to your interests and connections.'
  }
]

function DashboardMenu() {
  const [open, setOpen] = useState(false)
  const { onOpenCreatePost } = useCreatePost()

  const CREATE_MENUS = [
    {
      title: 'Post',
      logoIcon: <FeatureIconV7 name="Post" />,
      onClick: () => {
        setOpen(false)
        onOpenCreatePost()
      }
    },
    {
      title: 'Story',
      logoIcon: <FeatureIconV11 name="Story" />
    },
    {
      title: 'Reel',
      logoIcon: <FeatureIconV7 name="Reel" />
    },
    {
      title: 'Life Event',
      logoIcon: <FeatureIconV11 name="LifeEvent" />
    },
    {
      title: 'Page',
      logoIcon: <FeatureIconV7 name="Page" />
    },
    {
      title: 'Ad',
      logoIcon: <FeatureIconV12 name="Ad" />
    },
    {
      title: 'Group',
      logoIcon: <FeatureIconV11 name="Group" />
    },
    {
      title: 'Event',
      logoIcon: <FeatureIconV13 name="Event" />
    },
    {
      title: 'Marketplace Listing',
      logoIcon: <FeatureIconV11 name="MarketplaceListing" />
    }
  ]
  return (
    <PopoverMenu
      open={open}
      onOpenChange={setOpen}
      title="Menu"
      icon={<Menu className="size-5" />}
      dropdown={
        <div className="text-gray-900m w-152 rounded-lg bg-gray-50 p-2 pr-0 text-sm font-semibold">
          <h1 className="px-4 py-2 text-2xl font-bold">Menu</h1>
          <div className="group ml-3 mr-1 grid h-[82vh] grid-cols-8 overflow-y-auto">
            <div className="col-span-5 mx-1 rounded-xl bg-white shadow-thin">
              <div className="flex flex-col px-1.5 pb-2 pt-4">
                <Search placeholderValue="Search in menu" />
              </div>
              <h3 className="px-4 text-base font-semibold">Social</h3>
              {SOCIAL_MENUS.map(menu => (
                <MenuItem key={menu.title} {...menu} />
              ))}
              <div className="mx-4 my-3 h-[1px] bg-gray-300" />
              {ENTERTAINMENT_MENUS.map(menu => (
                <MenuItem key={menu.title} {...menu} />
              ))}
            </div>
            <div className="absolute left-2/3 mx-1 w-50 -translate-x-5 overflow-auto rounded-xl bg-white shadow-thin">
              <div className="right-0 top-0 h-fit pb-2">
                <h2 className="px-4 py-2 text-xl font-bold">Create</h2>
                {CREATE_MENUS.map((menu, index) => {
                  return (
                    <div key={menu.title} onClick={menu.onClick}>
                      {index === 4 && <div className="mx-4 my-2 h-[1px] border-0 bg-gray-300"></div>}
                      <CreateItem {...menu} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default DashboardMenu
