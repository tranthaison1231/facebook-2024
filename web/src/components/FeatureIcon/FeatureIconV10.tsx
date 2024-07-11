import FeatureIconsImagev10 from "../../assets/images/feature-icon-v10.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name:
    | "Meta"
    | "Event"
  size?: string;
}
function FeatureIconV10({ name, size }: FeatureIconProps) {
  const icons = {
    Meta: {
      backgroundPosition: "0px -0px",
    },
    Event: {
      backgroundPosition: "0px -37px",
    },
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev10})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-9", size)}
    ></i>
  );
}

export default FeatureIconV10;
