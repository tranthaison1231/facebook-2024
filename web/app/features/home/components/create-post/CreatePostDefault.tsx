import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'
import UserInfo from './UserInfo'
import { cn } from '@/utils/cn'
import { Position, usePositionStore } from '@/features/home/stores/position'
import Image from '@/components/Image'
import { LucideSmile } from 'lucide-react'
import { AddPhoto } from './AddPhoto'
import { Ellipsis } from 'lucide-react'
import location from '@/assets/images/location.png'
import gif from '@/assets/images/gif.png'
import tagUser from '@/assets/images/tag-user.png'
import smile from '@/assets/images/smile.png'
import picture from '@/assets/images/picture.png'
import { Button } from '@/components/ui/button'
import colorText from '@/assets/images/color-text.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPostSchema } from '@/helpers/schema'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { uploadImage } from '@/helpers/upload-image'

export const POST_OPTIONS = [
  {
    icon: <Image src={picture} alt={picture} />,
    title: 'Photo/Video',
    position: Position.Root
  },
  {
    icon: <Image src={tagUser} alt={tagUser} />,
    title: 'Tag people',
    position: Position.TagPeople
  },
  {
    icon: <Image src={smile} alt={smile} />,
    title: 'Feeling/Activity',
    position: Position.FeelingActivity
  },
  {
    icon: <Image src={location} alt={location} />,
    title: 'Check in',
    position: Position.CheckIn
  },
  {
    icon: <Image src={gif} alt={gif} />,
    title: 'GIF',
    position: Position.Gif
  },
  {
    icon: <Ellipsis className="size-5" />,
    title: 'Show more',
    position: Position.ShowMore
  }
]

export type AddPostInputs = z.infer<typeof createPostSchema>

export const CreatePostDefault = () => {
  const [isOpenAddPhoto, setIsOpenAddPhoto] = useState(true)
  const setPosition = usePositionStore(state => state.setPosition)

  const { register, handleSubmit, watch, setValue } = useForm<AddPostInputs>({
    mode: 'onBlur',
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      content: '',
      images: []
    }
  })
  const watchedContent = watch('content')
  const watchedImage = watch('images')

  const isDisabledSubmitButton = watchedContent === '' && watchedImage.length === 0

  const onSubmit = async (data: AddPostInputs) => {
    console.log(data)
  }

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = await uploadImage(file)
    setValue('images', [url])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogHeader>
        <DialogTitle className="pb-3">Create post</DialogTitle>
        <div className="border-b border-gray-300"></div>
        <UserInfo onClick={() => setPosition(Position.PostAudience)} />
      </DialogHeader>
      <DialogDescription>
        <div className={cn('group relative h-[155px] cursor-text px-4', { 'h-fit': isOpenAddPhoto })}>
          <textarea
            className={cn('w-full resize-none text-2xl text-black outline-none placeholder:text-gray-700', {
              'text-base': isOpenAddPhoto
            })}
            placeholder="What's on your mind, Tung?"
            {...register('content')}
          />
          {!isOpenAddPhoto && (
            <div className="absolute bottom-0 left-3 cursor-pointer">
              <Image className="size-9 rounded-lg" src={colorText} alt={colorText} />
            </div>
          )}
          <LucideSmile
            className={cn('absolute bottom-0 right-3 size-7 cursor-pointer text-gray-300 hover:text-gray-400', {
              'top-0': isOpenAddPhoto
            })}
          />
        </div>
      </DialogDescription>
      {isOpenAddPhoto && (
        <AddPhoto value={watchedImage} onChange={onUploadImage} onClose={() => setIsOpenAddPhoto(false)} />
      )}
      <div className="mx-4 mb-4 flex items-center justify-between rounded-lg border border-gray-400 px-4 py-2">
        <div className="cursor-pointer font-semibold text-black" onClick={() => setPosition(Position.ShowMore)}>
          Add to your post
        </div>
        <div className="flex items-center gap-1">
          {POST_OPTIONS.slice(0, 5).map(item => {
            if (item.title === 'Photo/Video')
              return (
                <Button
                  key={item.title}
                  variant={'ghost'}
                  size={'icon'}
                  className={cn('p-2', {
                    'bg-green-100 hover:bg-green-200': isOpenAddPhoto === true
                  })}
                  onClick={() => setIsOpenAddPhoto(true)}
                >
                  {item.icon}
                </Button>
              )
            return (
              <Button
                key={item.title}
                variant={'ghost'}
                size={'icon'}
                className={cn('p-2', {
                  'cursor-not-allowed opacity-50 grayscale hover:bg-transparent': item.title === 'GIF' && isOpenAddPhoto
                })}
                onClick={item.title === 'GIF' && isOpenAddPhoto ? () => {} : () => setPosition(item.position)}
              >
                {item.icon}
              </Button>
            )
          })}
          <div className="rounded-full p-2 hover:bg-gray-100" onClick={() => setPosition(Position.ShowMore)}>
            <Ellipsis className="size-5" />
          </div>
        </div>
      </div>
      <DialogFooter className="mx-4 pb-2">
        <Button className="w-full" variant="default" disabled={isDisabledSubmitButton}>
          Post
        </Button>
      </DialogFooter>
    </form>
  )
}
