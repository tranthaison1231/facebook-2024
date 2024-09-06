import FeatureIconsImagev1 from '@/assets/images/feature-icon-v1.png'
import { cn } from '@/core/utils/cn'
interface FeatureIconProps {
  name:
    | 'SeeProfile'
    | 'HelpAndSupport'
    | 'Feedback'
    | 'PrivacyCheckup'
    | 'Feed'
    | 'HelpCenter'
    | 'KeyBoard'
    | 'GlobalPencil'
    | 'CollapseMode'
  size?: string
}
function FeatureIconV1({ name, size }: FeatureIconProps) {
  const icons = {
    SeeProfile: {
      backgroundPosition: '0px -298px'
    },
    HelpAndSupport: {
      backgroundPosition: '0px -193px'
    },
    Feedback: {
      backgroundPosition: '0px -67px'
    },
    PrivacyCheckup: {
      backgroundPosition: '0px -172px'
    },
    Feed: {
      backgroundPosition: '0px -88px'
    },
    HelpCenter: {
      backgroundPosition: '0px -193px'
    },
    CollapseMode: {
      backgroundPosition: '0px -256px'
    },
    GlobalPencil: {
      backgroundPosition: '0px -277px'
    },
    KeyBoard: {
      backgroundPosition: '0px -130px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev1})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV1
