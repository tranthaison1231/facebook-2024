import { useState } from 'react'
import Image from '@/core/components/Image'
import camera from '@/assets/images/camera.png'
import avatar from '@/assets/images/avatar.jpeg'
import smile from '@/assets/images/smile.png'
import { Button } from '@/core/components/ui/button'
import picture from '@/assets/images/picture.png'
import CreatePost from '../components/create-post'
import { useOutletContext } from '@remix-run/react'
import { User } from '@/core/apis/user'
import { Position, PositionProvider, usePosition } from '../stores/position'

function PostHeader() {
  const { me } = useOutletContext<{ me: User }>()

  const [contentPostHeader, setContentPostHeader] = useState('')

  const { setPosition } = usePosition()

  return (
    <div className={'w-125 justify-self-center rounded-lg bg-white px-4 pb-2.5 pt-3 shadow-md'}>
      <div className="flex items-center gap-2 text-lg">
        <Image className="size-10 rounded-full" src={me?.avatar} alt={avatar} />
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          trigger={
            <Button
              className="flex w-full min-w-72 justify-start rounded-full p-2.5 text-lg font-normal text-gray-500"
              variant="secondary"
            >
              <p className="pl-2">{contentPostHeader ? contentPostHeader : `${me?.fullName}, what's on your mind?`}</p>
            </Button>
          }
        />
      </div>
      <div className="my-2 border-b border-gray-300" />
      <div className="flex w-full cursor-pointer items-center">
        <Button size={'default'} variant={'ghost'} className="basis-1/3 items-center gap-2">
          <Image src={camera} alt="camera" />
          <p>Live Video</p>
        </Button>
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          isAddPhoto
          trigger={
            <Button size={'default'} variant="ghost" className="basis-1/3 items-center gap-2">
              <Image src={picture} alt="picture" />
              <p>Photo/Video</p>
            </Button>
          }
        />
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          trigger={
            <Button
              size={'default'}
              variant={'ghost'}
              className="basis-1/3 items-center gap-2"
              onClick={() => {
                setPosition(Position.FeelingActivity)
              }}
            >
              <Image src={smile} alt="feeling" />
              <p>Feeling/activity</p>
            </Button>
          }
        />
      </div>
    </div>
  )
}

function PostHeaderContainer() {
  return (
    <PositionProvider>
      <PostHeader />
    </PositionProvider>
  )
}

export default PostHeaderContainer
