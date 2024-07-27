import FeatureIconsImagev13 from '../../assets/images/feature-icon-v13.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'Event'
  size?: string
}
function FeatureIconV13({ name, size }: FeatureIconProps) {
  const icons = {
    Event: {
      backgroundPosition: '0px -54px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev13})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV13
