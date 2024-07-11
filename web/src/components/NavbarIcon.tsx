
import NavbarIconsImages from "../assets/images/navbar-icon.png";

interface NavbarIconProps {
  name: 'friends' | 'memories' | 'saved' | 'group' | 'video' | 'pages'
}

export default function NavbarIcon({name}:NavbarIconProps) {
  const icons = {
    friends : {
      backgroundPosition: "0px -259px",
    },
    memories : {
      backgroundPosition: "0px -407px",
    },
    saved : {
      backgroundPosition: "0px -148px",
    },
    group : {
      backgroundPosition: "0px -37px",
    },
    video : {
      backgroundPosition: "0px -481px",
    },
    pages : {
      backgroundPosition: "0px -107px",
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${NavbarIconsImages})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: "auto",
      }}
      className="size-9 inline-block bg-no-repeat "
    ></i>
  );
}
