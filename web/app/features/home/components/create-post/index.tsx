import { Dialog, DialogContent } from '@/core/components/ui/dialog'
import TagPeople from './TagPeople'
import FeelingActivity from './FeelingActivity'
import Gif from './Gif'
import ShowMore from './ShowMore'
import CheckIn from './CheckIn'
import PostAudience from './PostAudience'

import { Position, usePosition } from '@/features/home/stores/position'
import { CreatePostDefault } from './CreatePostDefault'
import { DialogProps } from '@radix-ui/react-dialog'

interface CreatePostProps extends DialogProps {
  isAddPhoto?: boolean
  currentPosition?: Position
  handleContentPostHeader?: (value: string) => void
  onCreatePostSuccess: () => void
}

export enum PostAudienceOptions {
  Public,
  Friends,
  FriendsExcept,
  SpecificFriends,
  OnlyMe,
  Setting
}

function CreatePost({ open, onOpenChange, onCreatePostSuccess }: CreatePostProps) {
  const { setPosition, position } = usePosition()

  const PostContent = {
    [Position.Root]: <CreatePostDefault onSuccess={onCreatePostSuccess} />,
    [Position.TagPeople]: <TagPeople onBack={() => setPosition(Position.Root)} />,
    [Position.FeelingActivity]: <FeelingActivity onBack={() => setPosition(Position.Root)} />,
    [Position.Gif]: <Gif onBack={() => setPosition(Position.Root)} />,
    [Position.CheckIn]: <CheckIn onBack={() => setPosition(Position.Root)} />,
    [Position.ShowMore]: <ShowMore onBack={() => setPosition(Position.Root)} />,
    [Position.PostAudience]: (
      <PostAudience
        onBack={() => {
          setPosition(Position.Root)
        }}
      />
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[500px] pb-2 shadow-3xl"
        onInteractOutside={() => {
          setPosition(Position.Root)
        }}
        hideCloseButton={position !== Position.Root}
      >
        {PostContent[position]}
      </DialogContent>
    </Dialog>
  )
}

export default CreatePost
