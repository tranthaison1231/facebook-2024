import FeatureIconsImagev6 from "../../assets/images/feature-icon-v6.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "PrivacyCenter" | "DarkMode";
  size?: string;
}
function FeatureIconV6({ name, size }: FeatureIconProps) {
  const icons = {
    PrivacyCenter: {
      backgroundPosition: "0px -260px",
    },
    DarkMode: {
      backgroundPosition: "0px -197px",
    }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev6})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5", size)}
    ></i>
  );
}

export default FeatureIconV6;
