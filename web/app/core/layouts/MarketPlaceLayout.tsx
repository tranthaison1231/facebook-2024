import LeftBarMarketPlace from '@/features/home/components/left-section/LeftBarMarketPlace'
import { Outlet } from '@remix-run/react'

export default function MarketplaceLayout() {
  return (
    <div className="bg-gray-100">
      <LeftBarMarketPlace className="fixed w-full flex-col pt-4 lg:w-90" />
      <div className="ml-90 h-screen pt-4">
        <Outlet />
      </div>
    </div>
  )
}
