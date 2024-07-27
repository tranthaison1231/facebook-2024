import Login from '@/pages/login'
import { Outlet } from 'react-router-dom'

export default function AuthGuard() {
  const token = localStorage.getItem('token')

  if (!token) return <Login />

  return <Outlet />
}
