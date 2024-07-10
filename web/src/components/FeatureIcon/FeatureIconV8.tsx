import FeatureIconsImagev8 from "../../assets/images/feature-icon-v8.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "Flag";
  size?: string;
}
function FeatureIconV8({ name, size }: FeatureIconProps) {
  const icons = {
    Flag: {
      backgroundPosition: "0px -348px",
    },
    Messenger: {
      backgroundPosition: "0px -261px",
    },
    Birthday: {
      backgroundPosition: "0px -725px",
    },
    User: {
      backgroundPosition: "0px -1189px",
    }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev8})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-7", size)}
    ></i>
  );
}

export default FeatureIconV8;
