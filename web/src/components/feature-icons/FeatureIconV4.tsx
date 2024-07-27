import FeatureIconsImagev4 from '../../assets/images/feature-icon-v4.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'ArrowTopRight' | 'Phone' | 'User'
  size?: string
}
function FeatureIconV4({ name, size }: FeatureIconProps) {
  const icons = {
    ArrowTopRight: {
      backgroundPosition: '0px -66px'
    },
    Phone: {
      backgroundPosition: '0px -162px'
    },
    User: {
      backgroundPosition: '0px -34px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev4})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-6 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV4
