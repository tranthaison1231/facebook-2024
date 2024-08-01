import { Outlet } from 'react-router-dom'
import Login from '@/pages/login'
import MinimizeHeader from '@/containers/header/MinimizeHeader'

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
