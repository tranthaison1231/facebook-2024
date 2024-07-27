import { Outlet } from 'react-router-dom'
import Header from '@/components/header/Header'

export default function FullLayout() {
  return (
    <div>
      <div className="fixed left-0 z-10 w-dvw">
        <Header />
      </div>
      <div className="pt-14">
        <Outlet />
      </div>
    </div>
  )
}
