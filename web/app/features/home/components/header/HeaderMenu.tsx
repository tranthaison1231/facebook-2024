import { Bell, Messenger } from '@/assets/svgs'
import DashboardMenu from './DashboardMenu'
import MessengerMenu from './MessengerMenu'
import NotificationDropDown from './NotificationMenu'
import AccountMenu from './AccountMenu'
import { PopoverMenu } from './PopoverMenu'

function HeaderMenu() {
  return (
    <div className="flex items-center gap-2 pr-4">
      <DashboardMenu />
      <PopoverMenu title="Message" icon={<Messenger className="size-5" />} dropdown={<MessengerMenu />} />
      <PopoverMenu title="Notification" icon={<Bell className="size-5" />} dropdown={<NotificationDropDown />} />
      <AccountMenu />
    </div>
  )
}

export default HeaderMenu
