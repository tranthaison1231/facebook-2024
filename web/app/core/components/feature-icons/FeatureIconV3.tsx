import FeatureIconsImagev3 from '@/assets/images/feature-icon-v3.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name: 'SettingAndPrivacy' | 'ArrowLeft' | 'Ellipsis' | 'ShoppingCart'
  size?: string
}
function FeatureIconV3({ name, size }: FeatureIconProps) {
  const icons = {
    SettingAndPrivacy: {
      backgroundPosition: '0px -482px'
    },
    ArrowLeft: {
      backgroundPosition: '0px -124px'
    },
    Ellipsis: {
      backgroundPosition: '0px -419px'
    },
    ShoppingCart: {
      backgroundPosition: '0px -503px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev3})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV3
