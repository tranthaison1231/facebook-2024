import { Popover, PopoverContent, PopoverTrigger } from '@/core/components/ui/popover'

import FeatureIconV2 from '@/core/components/feature-icons/FeatureIconV2'
import FeatureIconV14 from '@/core/components/feature-icons/FeatureIconV14'
import FeatureIconV15 from '@/core/components/feature-icons/FeatureIconV15'
import clock from '@/assets/images/clock.png'
import hidePost from '@/assets/images/hide-post.png'
import Image from '@/core/components/Image'
import { Trash } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '@/core/apis/post'
import { toast } from 'sonner'

interface PopoverInfoProps {
  trigger: React.ReactNode
  postId: string
}

export default function PopoverMoreMenu({ trigger, postId }: PopoverInfoProps) {
  const queryClient = useQueryClient()

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts']
      })
      toast.success('Post deleted successfully')
    }
  })

  const POSTLIST_MENUS = [
    {
      title: 'Report post to group admins',
      logo: <FeatureIconV15 name="StarShield" />
    },
    {
      title: 'Hide post',
      description: 'See fewer posts like this.',
      logo: <Image src={hidePost} alt={hidePost} />
    },
    {
      title: 'Snooze Son Tung for 30 days',
      description: 'Temporarily stop seeing posts',
      logo: <Image src={clock} alt={clock} />
    },
    {
      title: 'Move to Bin',
      logo: <Trash />,
      onClick: () => deletePostMutation.mutate(postId)
    }
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80 p-2">
        <div className="flex flex-row items-center gap-4 rounded-lg p-1 text-sm hover:bg-gray-200">
          <FeatureIconV2 name="Saved" />
          <div>
            <h4 className="font-semibold">Saved link</h4>
            <p>Add this to your saved items.</p>
          </div>
        </div>
        <div className="my-1 border border-gray-300" />
        <div className="flex flex-row items-center gap-4 rounded-lg px-1 py-2 text-sm hover:bg-gray-200">
          <FeatureIconV14 name="DarkBell" />
          <div>
            <h4 className="font-semibold">Turn on notifications for this post</h4>
          </div>
        </div>
        <div className="my-1 border border-gray-300" />
        {POSTLIST_MENUS.map(menu => (
          <div
            key={menu.title}
            className="flex cursor-pointer flex-row items-center gap-4 rounded-lg px-1 py-2 text-sm hover:bg-gray-200"
            onClick={menu.onClick}
          >
            {menu.logo}
            <div>
              <h4 className="font-semibold">{menu.title}</h4>
              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
