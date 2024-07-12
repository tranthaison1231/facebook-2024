import FeatureIconsImagev7 from "../../assets/images/feature-icon-v7.png";
import { cn } from "../../utils/cn";
interface FeatureIconProps {
  name: "AllActivities" | "MessageSupport" | "Reports" | "Star" | "Post" | "Reel" | "Page" | "Story";
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
    },
    Star: {
      backgroundPosition: "0px -742px",
    },
    Post:{
      backgroundPosition: "0px -343px",
    },
    Story:{
      backgroundPosition: "0px -189px",
    },
    Reel:{
      backgroundPosition: "0px -112px",
    },
    Page: {
      backgroundPosition: "0px -133px",
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
