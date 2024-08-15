import { Outlet } from '@remix-run/react'
import Header from '@/containers/header/Header'
import { useGetMe } from '@/hooks/useGetMe'

export default function FullLayout() {
  const { data } = useGetMe()
  return (
    <div>
      <div className="fixed left-0 z-10 w-dvw">
        <Header />
      </div>
      <div className="pt-14">
        <Outlet
          context={{
            me: data
          }}
        />
      </div>
    </div>
  )
}
