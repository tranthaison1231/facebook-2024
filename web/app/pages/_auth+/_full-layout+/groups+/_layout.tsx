import LeftBarGroups from '@/containers/left-section/LeftBarGroups'
import { Outlet } from '@remix-run/react'

export default function Groups() {
  return (
    <div className="bg-gray-100">
      <LeftBarGroups className="fixed w-90 flex-col pt-4" />
      <div className="ml-90 h-screen pt-4">
        <Outlet />
      </div>
    </div>
  )
}
