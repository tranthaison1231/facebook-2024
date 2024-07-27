import { useState } from 'react'
import { Position } from './CreatePost'
import CreatePost from './CreatePost'
import Image from '@/components/Image'
import camera from '@/assets/images/camera.png'
import avatar from '@/assets/images/avatar.jpeg'
import smile from '@/assets/images/smile.png'
import { Button } from '@/components/ui/button'
import picture from '@/assets/images/picture.png'

function PostHeader() {
  const [contentPostHeader, setContentPostHeader] = useState('')
  return (
    <div className={'justify-self-center rounded-lg w-125 bg-white px-4 pb-2.5 pt-3 shadow-md'}>
      <div className="flex items-center gap-2 text-lg">
        <Image className="size-10 rounded-full" src={avatar} alt={avatar} />
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          trigger={
            <Button
              className="flex w-full min-w-72 justify-start rounded-full p-2.5 text-lg font-normal text-gray-500"
              variant="secondary"
            >
              <p className="pl-2">{contentPostHeader ? contentPostHeader : "Tung, what's on your mind?"}</p>
            </Button>
          }
        />
      </div>
      <div className="my-2 border-b border-gray-300" />
      <div className="flex items-center w-full cursor-pointer ">
        <Button size={'default'} variant={'ghost'} className="items-center gap-2 basis-1/3">
          <Image src={camera} alt="camera" />
          <p>Live Video</p>
        </Button>
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          isAddPhoto
          trigger={
            <Button size={'default'} variant="ghost" className="items-center gap-2 basis-1/3">
              <Image src={picture} alt="picture" />
              <p>Photo/Video</p>
            </Button>
          }
        />
        <CreatePost
          handleContentPostHeader={setContentPostHeader}
          currentPosition={Position.FeelingActivity}
          trigger={
            <Button size={'default'} variant={'ghost'} className="items-center gap-2 basis-1/3">
              <Image src={smile} alt="feeling" />
              <p>Feeling/activity</p>
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default PostHeader
