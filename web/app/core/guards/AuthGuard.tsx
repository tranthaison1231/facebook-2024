import Login from '@/core/containers/Login'
import { Outlet } from '@remix-run/react'

export default function AuthGuard() {
  const token = localStorage.getItem('token')

  if (!token) return <Login />

  return <Outlet />
}
