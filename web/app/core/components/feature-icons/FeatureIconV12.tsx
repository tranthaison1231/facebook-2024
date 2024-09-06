import FeatureIconsImagev12 from '@/assets/images/feature-icon-v12.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'Ad' | 'Messenger' | 'AddPhoto'
  size?: string
}
function FeatureIconV12({ name, size }: FeatureIconProps) {
  const icons = {
    Ad: {
      backgroundPosition: '0px -149px'
    },
    Messenger: {
      backgroundPosition: '0px -0px'
    },
    AddPhoto: {
      backgroundPosition: '0px -190px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev12})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV12
