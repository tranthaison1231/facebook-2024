import FeatureIconV7 from "../../FeatureIcon/FeatureIconV7";
import FeatureIconV10 from "../../FeatureIcon/FeatureIconV10";
import FeatureIconV11 from "../../FeatureIcon/FeatureIconV11";
import FeatureIconV12 from "../../FeatureIcon/FeatureIconV12";
import FeatureIconV13 from "../../FeatureIcon/FeatureIconV13";
import NewFeed from "../../../assets/images/news-feed.png";
import Feeds from "../../../assets/images/feeds.png";
import GamingVideo from "../../../assets/images/gaming-video.png";
import PlayGame from "../../../assets/images/play-games.png";
import Video from "../../../assets/images/video.png";
import NavbarIcon from "../../FeatureIcon/NavbarIcon";
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

export const ENTERTAINMENT_MENUS = [
  {
    title: "Gaming Video",
    logoIcon: <Image src={GamingVideo} alt={"gaming-video"} />,
    content: "Watch and connect with your favourite games and streamers.",
  },
  {
    title: "Play games",
    logoIcon: <Image src={PlayGame} alt="play-games" />,
    content: "Play your favourite games",
  },
  {
    title: "Video",
    logoIcon: <Image src={Video} alt="video" />,
    content: "A video destination to your interests and connections.",
  },
];

export const CREATE_MENUS = [
  {
    title: "Post",
    logoIcon: <FeatureIconV7 name="Post" />,
  },
  {
    title: "Story",
    logoIcon: <FeatureIconV11 name="Story" />,
  },
  {
    title: "Reel",
    logoIcon: <FeatureIconV7 name="Reel" />,
  },
  {
    title: "Life Event",
    logoIcon: <FeatureIconV11 name="LifeEvent" />,
  },
  {
    title: "Page",
    logoIcon: <FeatureIconV7 name="Page" />,
  },
  {
    title: "Ad",
    logoIcon: <FeatureIconV12 name="Ad" />,
  },
  {
    title: "Group",
    logoIcon: <FeatureIconV11 name="Group" />,
  },
  {
    title: "Event",
    logoIcon: <FeatureIconV13 name="Event" />,
  },
  {
    title: "Marketplace Listing",
    logoIcon: <FeatureIconV11 name="MarketplaceListing" />,
  },
];
