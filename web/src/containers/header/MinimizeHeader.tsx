import HeaderMenu from './HeaderMenu'

export default function MinimizeHeader() {
  return (
    <div className="fixed z-10 right-0 h-14 grid place-items-center">
      <div className="justify-self-end">
        <HeaderMenu />
      </div>
    </div>
  )
}
