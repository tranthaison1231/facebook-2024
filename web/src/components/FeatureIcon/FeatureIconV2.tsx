import FeatureIconsImagev2 from "../../assets/images/feature-icon-v2.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "MetaBusiness" | "ScreenAndAssistant" | "LogOut" ;
  size?:string
}
function FeatureIconV2({ name,size }: FeatureIconProps) {
  const icons = {
    MetaBusiness: {
      backgroundPosition: "0px -66px",
    },
    ScreenAndAssistant: {
      backgroundPosition: "0px -381px",
    },
    LogOut: {
      backgroundPosition: "0px -318px",
    }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev2})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5",size)}
    ></i>
  );
}

export default FeatureIconV2;
