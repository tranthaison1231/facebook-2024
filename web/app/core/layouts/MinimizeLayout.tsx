import { Outlet } from '@remix-run/react'
import MinimizeHeader from '@/features/home/components/header/MinimizeHeader'
import Login from '../containers/Login'

export default function MinimizeLayout() {
  const token = localStorage.getItem('token')

  if (!token) return <Login />

  return (
    <div>
      <MinimizeHeader />
      <Outlet />
    </div>
  )
}
