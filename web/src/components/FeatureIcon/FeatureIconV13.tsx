import FeatureIconsImagev13 from "../../assets/images/feature-icon-v13.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "Event"
  size?: string;
}
function FeatureIconV13({ name, size }: FeatureIconProps) {
  const icons = {
   Event: {
    backgroundPosition: "0px -54px",
   }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev13})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5", size)}
    ></i>
  );
}

export default FeatureIconV13;
