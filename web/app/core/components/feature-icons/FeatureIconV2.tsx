import FeatureIconsImagev2 from '@/assets/images/feature-icon-v2.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'MetaBusiness' | 'DisplayAccessibility' | 'LogOut' | 'Saved'
  size?: string
}
function FeatureIconV2({ name, size }: FeatureIconProps) {
  const icons = {
    MetaBusiness: {
      backgroundPosition: '0px -66px'
    },
    DisplayAccessibility: {
      backgroundPosition: '0px -381px'
    },
    LogOut: {
      backgroundPosition: '0px -318px'
    },
    Saved: {
      backgroundPosition: '0px -129px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev2})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV2
