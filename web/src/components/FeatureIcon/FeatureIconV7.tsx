import FeatureIconsImagev7 from "../../assets/images/feature-icon-v7.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "AllActivities" | "MessageSupport" | "Reports";
  size?:string
}
function FeatureIconV7({ name,size }: FeatureIconProps) {
  const icons = {
    AllActivities: {
      backgroundPosition: "0px -532px",
    },
    MessageSupport: {
      backgroundPosition: "0px -385px",
    },
    Reports: {
      backgroundPosition: "0px -679px",
    }
  };
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev7})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className={cn("inline-block bg-no-repeat size-5",size)}
    ></i>
  );
}

export default FeatureIconV7;
