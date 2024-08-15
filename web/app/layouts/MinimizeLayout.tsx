import { Outlet } from '@remix-run/react'
import MinimizeHeader from '@/containers/header/MinimizeHeader'
import Login from '@/containers/login'

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
