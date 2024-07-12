import FeatureIconsImagev12 from "../../assets/images/feature-icon-v12.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "Ad";
  size?: string;
}
function FeatureIconV12({ name, size }: FeatureIconProps) {
  const icons = {
   Ad: {
    backgroundPosition: "0px -149px",
   }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev12})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5", size)}
    ></i>
  );
}

export default FeatureIconV12;
