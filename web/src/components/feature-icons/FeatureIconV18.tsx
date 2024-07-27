import FeatureIconsImagev18 from '../../assets/images/feature-icon-v18.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'MarketPlace' | 'Car'
  size?: string
}
function FeatureIconV18({ name, size }: FeatureIconProps) {
  const icons = {
    MarketPlace: {
      backgroundPosition: '0px -273px'
    },
    Car: {
      backgroundPosition: '0px -84px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev18})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV18
