import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/core/components/Image'

function ContactItem() {
  return (
    <div className="flex w-full flex-row items-center gap-4 rounded-xl p-2 font-normal hover:bg-gray-200">
      <Image className="size-9 rounded-full" src={avatar} alt={avatar}>
        <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500"></div>
      </Image>
      <p className="font-semibold">Sơn Tùng</p>
    </div>
  )
}

export default ContactItem
