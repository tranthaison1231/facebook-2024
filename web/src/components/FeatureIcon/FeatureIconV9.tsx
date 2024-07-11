import FeatureIconsImagev9 from "../../assets/images/feature-icon-v9.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name:
    | "NewMessage"
    | "ShowAll"
;
  size?: string;
}
function FeatureIconV9({ name, size }: FeatureIconProps) {
  const icons = {
    ShowAll: {
      backgroundPosition: "0px -531px",
    },
    NewMessage: {
      backgroundPosition: "-17px -573px",
    }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev9})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5", size)}
    ></i>
  );
}

export default FeatureIconV9;
