import FeatureIconV10 from "../../../components/FeatureIcon/FeatureIconV10";
import NewFeed from "../../../assets/images/news-feed.png";
import Feeds from "../../../assets/images/feeds.png";
import NavbarIcon from "../../NavbarIcon";
import Image from "../../Image";

export const SOCIAL_MENUS = [
  {
    title: "Events",
    logoIcon: <FeatureIconV10 name="Event" />,
    content: "Organize or find events and other things to do online and nearby",
  },
  {
    title: "Friends",
    logoIcon: <NavbarIcon name="friends" />,
    content: "Search for friends or people you may know",
  },
  {
    title: "Groups",
    logoIcon: <NavbarIcon name="group" />,
    content: "Connect with people who share your interests",
  },
  {
    title: "News Feed",
    logoIcon: <Image src={NewFeed} alt={"news-feed"} />,
    content: "See relevant posts from people and Pages you follow",
  },
  {
    title: "Feeds",
    logoIcon: <Image src={Feeds} alt={"feeds"} />,
    content:
      "See the most recent posts from your friends, groups, Pages, and more.",
  },
  {
    title: "Pages",
    logoIcon: <NavbarIcon name="pages" />,
    content: "Discover and connect with business of Facebook",
  },
];
