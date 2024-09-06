import Image from '@/core/components/Image'
import { Button } from '@/core/components/ui/button'
import tagUser from '@/assets/images/tag-user.png'
import smile from '@/assets/images/smile.png'
import picture from '@/assets/images/picture.png'
import FeatureIconV4 from './feature-icons/FeatureIconV4'

function PostHeaderGroupCreate() {
  return (
    <div className={'pointer-events-none justify-self-center rounded-lg bg-white px-4 pb-2.5 pt-3 shadow-md grayscale'}>
      <div className="flex items-center gap-2 text-lg">
        <FeatureIconV4 name="User" size="size-8 p-4" />
        <Button
          className="flex w-full min-w-72 justify-start rounded-full p-2.5 text-base font-normal text-gray-500"
          variant="secondary"
          size={'sm'}
        >
          <p className="pl-2">{"What's on your mind?"}</p>
        </Button>
      </div>
      <div className="my-2 border-b border-gray-300" />
      <div className="flex w-full cursor-pointer items-center justify-around children:p-0">
        <Button variant="ghost" className="basis-1/3 items-center gap-2">
          <Image src={picture} alt="picture" />
          <p>Photo/Video</p>
        </Button>

        <Button variant={'ghost'} className="basis-1/3 items-center gap-2">
          <Image src={tagUser} alt="tagUser" />
          <p>Tag people</p>
        </Button>

        <Button variant={'ghost'} className="basis-1/3 items-center gap-2">
          <Image src={smile} alt="feeling" />
          <p>Feeling/activity</p>
        </Button>
      </div>
    </div>
  )
}

export default PostHeaderGroupCreate
