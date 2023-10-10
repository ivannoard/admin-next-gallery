import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiGalleryFill } from "react-icons/ri";

export const sideNav = [
  {
    id: 1,
    name: "dashboard",
    path: "/",
    icon: <AiTwotoneHome />,
  },
  {
    id: 2,
    name: "blog",
    path: "/blog",
    icon: <PiGithubLogoFill />,
  },
  {
    id: 3,
    name: "gallery",
    path: "/gallery",
    icon: <RiGalleryFill />,
  },
  {
    id: 4,
    name: "settings",
    path: "/settings",
    icon: <AiFillSetting />,
  },
];
