import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/core/components/ui/hover-card'
import { Avatar, AvatarImage } from '@/core/components/ui/avatar'
import avatar from '@/assets/images/avatar.jpeg'
import info from '@/assets/images/info.png'
import user from '@/assets/images/user.png'
import direction from '@/assets/images/direction.png'
import follower from '@/assets/images/follower.png'
import messenger from '@/assets/images/messenger.png'
import like from '@/assets/images/like.png'
import { cn } from '@/core/utils/cn'
import { Button } from './ui/button'
import Image from './Image'
import { User } from '../apis/user'

const PROFILE_DETAILS = [
  { title: 'info', type: 'Page', content: 'News & media website', icon: <Image src={info} alt={'info'} /> },
  {
    title: 'user',
    content: 'Sơn Tùng: Ca sĩ',
    icon: <Image src={user} alt={'user'} />
  },
  {
    title: 'direction',
    content: 'HCMC, Vietnam',
    icon: <Image src={direction} alt={'direction'} />
  },
  { title: 'follower', content: '10,000 followers', icon: <Image src={follower} alt={'follower'} /> }
]

interface HoverCardInfoProps {
  trigger: React.ReactNode
  owner: User
}

export default function HoverCardInfo({ trigger, owner }: HoverCardInfoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent className="w-[400px] p-4">
        <div className="flex gap-4 px-3 py-2">
          <Avatar className="size-24">
            <AvatarImage src={owner?.avatar} />
          </Avatar>
          <div>
            <h1 className="pb-4 text-2xl font-bold">{owner?.firstName + ' ' + owner?.lastName}</h1>
            {PROFILE_DETAILS.map(profile => (
              <div key={profile.title} className="my-2 flex items-center gap-2">
                <div>{profile.icon}</div>
                <p className="font-semibold">
                  {profile.type}{' '}
                  <span
                    className={cn('font-normal', {
                      'font-semibold text-blue-500 hover:underline': profile.title === 'direction'
                    })}
                  >
                    {profile.content}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="basis-1/2 gap-1" variant={'default'}>
            <Image src={messenger} alt="messenger" className="invert" />
            Messenger
          </Button>
          <Button className="basis-1/2 gap-1" variant={'secondary'}>
            <Image src={like} alt="like" />
            Like
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
