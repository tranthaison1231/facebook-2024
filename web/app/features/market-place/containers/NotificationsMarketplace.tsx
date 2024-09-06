import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/core/components/Image'

const MARKETPLACE_NOTIFICATIONS = [
  {
    id: 1,
    image: avatar,
    notification: 'Browse more home your listings in your area',
    time: '1d'
  },
  {
    id: 2,
    image: avatar,
    notification: 'Browse more home your listings in your area',
    time: '1d'
  },
  {
    id: 3,
    image: avatar,
    notification: 'Browse more home your listings in your area',
    time: '1d'
  },
  {
    id: 4,
    image: avatar,
    notification: 'Browse more home your listings in your area',
    time: '1d'
  },
  {
    id: 5,
    image: avatar,
    notification: 'Browse more home your listings in your area',
    time: '1d'
  }
]
export default function NotificationsMarketplace() {
  return (
    <div className="grid place-content-center">
      <div className="mb-2 flex w-170 flex-col rounded-lg bg-white px-2 py-4 shadow-md">
        <h1 className="mb-4 px-2 text-2xl font-bold">Notifications</h1>
        <h4 className="px-2 font-semibold">Earlier</h4>
        {MARKETPLACE_NOTIFICATIONS.map(item => (
          <div key={item.id} className="flex flex-row items-center justify-between">
            <div className="flex w-full flex-row items-center space-x-3 rounded-lg p-3 hover:bg-gray-100">
              <Image src={item.image} alt="avatar" className="size-12 rounded-lg" />
              <div>
                <p>{item.notification}</p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <div className="size-2 rounded-full bg-primary" />
                  {item.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
