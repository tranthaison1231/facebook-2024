import FeatureIconsImagev1 from "../../assets/images/feature-icon-v1.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name:
    | "SeeProfile"
    | "HelpAndSupport"
    | "Contribution"
    | "CheckPrivacy"
    | "Feeds"
    | "HelpCenter"
    | "KeyBoard"
    | "GlobalPencil"
    | "CollapseMode";
  size?: string;
}
function FeatureIconV1({ name, size }: FeatureIconProps) {
  const icons = {
    SeeProfile: {
      backgroundPosition: "0px -298px",
    },
    HelpAndSupport: {
      backgroundPosition: "0px -193px",
    },
    Contribution: {
      backgroundPosition: "0px -67px",
    },
    CheckPrivacy: {
      backgroundPosition: "0px -172px",
    },
    Feeds: {
      backgroundPosition: "0px -88px",
    },
    HelpCenter: {
      backgroundPosition: "0px -193px",
    },
    CollapseMode: {
      backgroundPosition: "0px -256px",
    },
    GlobalPencil: {
      backgroundPosition: "0px -277px",
    },
    KeyBoard: {
      backgroundPosition: "0px -130px",
    },
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev1})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5", size)}
    ></i>
  );
}

export default FeatureIconV1;
