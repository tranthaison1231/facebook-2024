import { Link } from "react-router-dom";
import Image from "./Image";
import avatar from "../assets/images/sontung.jpeg";
import { cn } from "../utils/cn";
import NavbarIcon from "./FeatureIcon/NavbarIcon";

const MENUS = [
  {
    label: "Nguyễn Thành Hiếu",
    link: "/",
    icon: (
      <Image
        src={avatar}
        alt="avatar"
        className="rounded-full size-10 object-cover"
      />
    ),
  },
  { label: "Friends", link: "/friends", icon: <NavbarIcon name="friends" /> },
  {
    label: "Memories",
    link: "/onthisday",
    icon: <NavbarIcon name="memories" />,
  },
  {
    label: "Saved",
    link: "/saved",
    icon: <NavbarIcon name="saved" />,
  },
  {
    label: "Group",
    link: "/group",
    icon: <NavbarIcon name="group" />,
  },
  {
    label: "Video",
    link: "/video",
    icon: <NavbarIcon name="video" />,
  },
];

interface NavbarProps {
  className?: string;
}

function LeftBar({ className }: NavbarProps) {
  return (
    <div className={cn("fixed pt-4 px-3 hidden xl:block", className)}>
      {MENUS.map((menu) => (
        <div key={menu.link}>
          <Link
            to={menu.link}
            className={cn(
              "p-2 flex items-center gap-4 font-semibold hover:bg-gray-200 rounded-lg"
            )}
          >
            {menu.icon}
            {menu.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default LeftBar;
