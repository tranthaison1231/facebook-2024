import FeatureIconsImagev4 from "../../assets/images/feature-icon-v4.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "ArrowTopRight";
  size?: string;
}
function FeatureIconV4({ name, size }: FeatureIconProps) {
  const icons = {
    ArrowTopRight: {
      backgroundPosition: "0px -66px",
    },
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev4})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-6",size)}
    ></i>
  );
}

export default FeatureIconV4;
