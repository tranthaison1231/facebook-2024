import FeatureIconsImagev7 from '@/assets/images/feature-icon-v7.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'ActivityLog' | 'MessageSupport' | 'Reports' | 'Star' | 'Post' | 'Reel' | 'Page' | 'Story' | 'Inbox' | 'Selling'
  size?: string
}
function FeatureIconV7({ name, size }: FeatureIconProps) {
  const icons = {
    ActivityLog: {
      backgroundPosition: '0px -532px'
    },
    MessageSupport: {
      backgroundPosition: '0px -385px'
    },
    Reports: {
      backgroundPosition: '0px -679px'
    },
    Star: {
      backgroundPosition: '0px -742px'
    },
    Post: {
      backgroundPosition: '0px -343px'
    },
    Story: {
      backgroundPosition: '0px -189px'
    },
    Reel: {
      backgroundPosition: '0px -112px'
    },
    Page: {
      backgroundPosition: '0px -133px'
    },
    Inbox: {
      backgroundPosition: '0px -385px'
    },
    Selling: {
      backgroundPosition: '0px -364px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev7})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV7
