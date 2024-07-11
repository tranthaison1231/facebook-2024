import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { cn } from "../../utils/cn";
import { Home, Market, Group, Game } from "../../assets/svgs";

const HEADER_BARS = [
  {
    name: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    name: "Market",
    icon: <Market />,
    path: "/marketplace",
  },
  {
    name: "Group",
    icon: <Group />,
    path: "/groups",
  },
  {
    name: "Game",
    icon: <Game />,
    path: "/gaming",
  },
];

function HeaderBar() {
  const location = useLocation();
  return (
    <div className="flex flex-row items-center gap-2">
      {HEADER_BARS.map((bar) => (
        <Link
          to={bar.path}
          key={bar.name}
          className={cn("border-b-4 border-transparent", {
            "border-b-[#0866ff]": location.pathname === bar.path,
          })}
        >
          <div
            className={cn("flex items-center gap-2 px-10 py-3  rounded-lg", {
              "hover:bg-gray-100": location.pathname !== bar.path,
            })}
          >
            {bar.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HeaderBar;
