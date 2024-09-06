import FeatureIconsImagev14 from '@/assets/images/feature-icon-v14.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'DarkBell'
  size?: string
}
function FeatureIconV14({ name, size }: FeatureIconProps) {
  const icons = {
    DarkBell: {
      backgroundPosition: '0px -88px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev14})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV14
