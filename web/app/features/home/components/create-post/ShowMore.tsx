import { DialogHeader, DialogTitle } from '@/core/components/ui/dialog'
import FeatureIconV3 from '@/core/components/feature-icons/FeatureIconV3'
import { Position, usePosition } from '../../stores/position'
import { POST_OPTIONS } from './CreatePostDefault'

interface ShowMoreProps {
  handleOpenAddPhoto?: () => void
  onBack: () => void
}

function ShowMore({ handleOpenAddPhoto, onBack }: ShowMoreProps) {
  const { setPosition } = usePosition()

  return (
    <>
      <DialogHeader className="relative">
        <DialogTitle className="border-b border-gray-400 pb-5">
          <div
            className="absolute -top-3 left-4 flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={onBack}
          >
            <FeatureIconV3 name="ArrowLeft" />
          </div>
          <h4>Add to your post</h4>
        </DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-1 px-2 children:flex children:items-center children:gap-2 children:rounded-lg children:p-2 children:text-base children:font-semibold children:text-black">
        {POST_OPTIONS.map(item => {
          if (item.position !== Position.ShowMore)
            return (
              <div
                key={item.title}
                className="hover:bg-gray-200"
                onClick={() => {
                  if (item.title === 'Photo/Video') {
                    handleOpenAddPhoto?.()
                  }
                  setPosition(item.position)
                }}
              >
                {item.icon}
                <p>{item.title}</p>
              </div>
            )
          return null
        })}
      </div>
    </>
  )
}

export default ShowMore
