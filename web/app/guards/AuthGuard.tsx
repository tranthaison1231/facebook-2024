import Login from '@/containers/login'
import { Outlet } from '@remix-run/react'

export default function AuthGuard() {
  const token = localStorage.getItem('token')

  if (!token) return <Login />

  return <Outlet />
}
