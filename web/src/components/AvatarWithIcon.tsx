import Image from './Image'

interface AvatarWithIconProps {
  avatar: string
  Icon: JSX.Element
}
function AvatarWithIcon({ avatar, Icon }: AvatarWithIconProps) {
  return (
    <div className="group relative w-14">
      <Image src={avatar} className="size-14 cursor-pointer rounded-full" alt="avatar" />
      <div className="absolute -bottom-2 -right-2">{Icon}</div>
    </div>
  )
}

export default AvatarWithIcon
