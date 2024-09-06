import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/core/components/ui/carousel'
import avatar from '@/assets/images/avatar.jpeg'
import DiscoverGroupItem from '../components/DiscoverGroupItem'

const DISCOVER_GROUPS = [
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  },
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  },
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  },
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  },
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  },
  {
    title: 'Hội cuồng Sơn Tùng',
    members: '34K members',
    friends: 'Sơn Tùng and 1 friend are member',
    postsPerDay: '10+ posts a day',
    image: avatar
  }
]

export default function DiscoverGroup() {
  return (
    <div className="px-16">
      <div className="mb-4 border-b border-gray-300 pb-8">
        <div className="pb-4">
          <h1 className="text-xl font-bold">{`Friends' groups`}</h1>
          <p>Groups your friends are in</p>
        </div>
        <Carousel>
          <CarouselContent>
            {DISCOVER_GROUPS.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 2xl:basis-1/3">
                <DiscoverGroupItem
                  title={item.title}
                  members={item.members}
                  friends={item.friends}
                  postsPerDay={item.postsPerDay}
                  image={item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mb-4 border-b border-gray-300 pb-8">
        <div className="pb-4">
          <h1 className="text-xl font-bold">More Suggestions</h1>
        </div>
        <Carousel>
          <CarouselContent>
            {DISCOVER_GROUPS.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 2xl:basis-1/3">
                <DiscoverGroupItem
                  title={item.title}
                  members={item.members}
                  friends={item.friends}
                  postsPerDay={item.postsPerDay}
                  image={item.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
