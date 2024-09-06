import FeatureIconsImagev17 from '@/assets/images/feature-icon-v17.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'Compass'
  size?: string
}
function FeatureIconV17({ name, size }: FeatureIconProps) {
  const icons = {
    Compass: {
      backgroundPosition: '0px -42px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev17})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV17
