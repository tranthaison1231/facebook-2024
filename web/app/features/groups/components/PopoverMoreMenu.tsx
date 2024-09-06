import { Popover, PopoverContent, PopoverTrigger } from '@/core/components/ui/popover'

import FeatureIconV2 from '@/core/components/feature-icons/FeatureIconV2'
import FeatureIconV14 from '@/core/components/feature-icons/FeatureIconV14'
import FeatureIconV15 from '@/core/components/feature-icons/FeatureIconV15'
import clock from '@/assets/images/clock.png'
import hideAll from '@/assets/images/hide-all.png'
import blockUser from '@/assets/images/block-user.png'
import reportPost from '@/assets/images/report.png'
import hidePost from '@/assets/images/hide-post.png'
import Image from '@/core/components/Image'

const POSTLIST_MENUS = [
  {
    title: 'Report post to group admins',
    logo: <FeatureIconV15 name="StarShield" />
  },
  {
    title: 'Hide post',
    description: 'See fewer posts like this.',
    logo: <Image src={hidePost} alt={hidePost} />
  },
  {
    title: 'Snooze Son Tung for 30 days',
    description: 'Temporarily stop seeing posts',
    logo: <Image src={clock} alt={clock} />
  },
  {
    title: 'Hide all from Son Tung',
    logo: <Image src={hideAll} alt={hideAll} />,
    description: 'Stop seeing posts from Son Tung'
  },
  {
    title: 'Unfollow Son Tung',
    logo: <Image src={hideAll} alt={hideAll} />,
    description: 'Stop seeing posts from Son Tung'
  },
  {
    title: 'Report Son Tung',
    logo: <Image src={reportPost} alt={reportPost} />,
    description: 'We wont let them know you are using Facebook'
  },
  {
    title: 'Block Son Tung',
    logo: <Image src={blockUser} alt={blockUser} />
  }
]

interface PopoverInfoProps {
  trigger: React.ReactNode
}

export default function PopoverMoreMenu({ trigger }: PopoverInfoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80 p-2">
        <div className="flex flex-row items-center gap-4 rounded-lg p-1 text-sm hover:bg-gray-200">
          <FeatureIconV2 name="Saved" />
          <div>
            <h4 className="font-semibold">Saved link</h4>
            <p>Add this to your saved items.</p>
          </div>
        </div>
        <div className="my-1 border border-gray-300" />
        <div className="flex flex-row items-center gap-4 rounded-lg px-1 py-2 text-sm hover:bg-gray-200">
          <FeatureIconV14 name="DarkBell" />
          <div>
            <h4 className="font-semibold">Turn on notifications for this post</h4>
          </div>
        </div>
        <div className="my-1 border border-gray-300" />
        {POSTLIST_MENUS.map(menu => (
          <div
            key={menu.title}
            className="flex flex-row items-center gap-4 rounded-lg px-1 py-2 text-sm hover:bg-gray-200"
          >
            {menu.logo}
            <div>
              <h4 className="font-semibold">{menu.title}</h4>
              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
