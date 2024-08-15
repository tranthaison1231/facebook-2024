import FeatureIconsImagev11 from '../../assets/images/feature-icon-v11.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'Story' | 'LifeEvent' | 'Group' | 'MarketplaceListing'

  size?: string
}
function FeatureIconV11({ name, size }: FeatureIconProps) {
  const icons = {
    Story: {
      backgroundPosition: '0px -189px'
    },
    LifeEvent: {
      backgroundPosition: '0px -126px'
    },
    Group: {
      backgroundPosition: '0px 0px'
    },
    MarketplaceListing: {
      backgroundPosition: '0px -168px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev11})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV11
