import { Ellipsis, X, MessageSquare, ThumbsUp, MessageSquareShare } from 'lucide-react'
import Like from '@/assets/svgs/like.svg?react'
import Heart from '@/assets/svgs/heart.svg?react'
import avatar from '@/assets/images/avatar.jpeg'
import HoverCardInfo from '@/core/components/HoverCardInfo'
import PopoverMoreMenu from '@/features/groups/components/PopoverMoreMenu'
import { Button } from '@/core/components/ui/button'
import Image from '@/core/components/Image'
import { useOutletContext } from '@remix-run/react'
import { User } from '@/core/apis/user'
import { type Post as IPost } from '@/core/apis/post'
import Comment from './Comment'

interface PostProps {
  post: IPost
}

function Post({ post }: PostProps) {
  const { me } = useOutletContext<{ me: User }>()
  return (
    <div className="mb-2 flex w-125 flex-col space-y-2 rounded-lg bg-white shadow-md">
      <div className="px-3 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HoverCardInfo trigger={<Image src={me?.avatar} alt="User Avatar" className="size-10 rounded-full" />} />
            <div>
              <HoverCardInfo
                trigger={<p className="cursor-pointer font-semibold text-gray-800 hover:underline">{me?.fullName}</p>}
              />
              <p className="cursor-pointer text-xs text-gray-700">Posted 2 hours ago</p>
            </div>
          </div>
          <div className="cursor-pointer pr-1 text-gray-700">
            <PopoverMoreMenu
              trigger={
                <Button className="rounded-full p-2" variant={'ghost'}>
                  <Ellipsis className="size-6" />
                </Button>
              }
            />
            <Button className="rounded-full p-2" variant={'ghost'}>
              <X className="size-6" />
            </Button>
          </div>
        </div>
        <div>
          <p className="text-gray-800">{post.content}</p>
        </div>
      </div>
      <div>
        <Image src={avatar} alt="Post Image" className="w-full border-gray-300 object-cover" />
      </div>
      <div className="flex items-center justify-between px-5 text-sm text-gray-700">
        <div className="flex cursor-pointer items-center justify-center">
          <Like className="z-10 -mr-1 size-5 rounded-full border-2 border-white" />
          <Heart className="size-5 rounded-full border-2 border-white" />
          <p className="px-2"> {post.totalLikes} Likes</p>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-1">
          <p> {post.comments.length} Comments</p>
        </div>
      </div>
      <div className="px-4">
        <div className="my-1 border-b border-gray-300" />
        <div className="flex justify-around children:flex children:grow children:items-center children:justify-center children:gap-1 children:font-semibold children:text-gray-600">
          <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
            <ThumbsUp className="size-5" />
            Like
          </Button>
          <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
            <MessageSquare className="size-5" />
            Comment
          </Button>
          <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
            <MessageSquareShare className="size-5" />
            Share
          </Button>
        </div>
        <div className="my-1 border-b border-gray-300" />
        <div className="mt-4">
          {
            post.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Post
