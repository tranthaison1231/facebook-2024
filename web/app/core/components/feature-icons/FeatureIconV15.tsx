import FeatureIconsImagev15 from '@/assets/images/feature-icon-v15.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'StarShield'
  size?: string
}
function FeatureIconV15({ name, size }: FeatureIconProps) {
  const icons = {
    StarShield: {
      backgroundPosition: '0px 0px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev15})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV15
