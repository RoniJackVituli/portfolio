import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

const items = [
  {
    title: "Home",
    icon: <BiHomeAlt />,
    to: "home",
  },
  {
    title: "Projects",
    icon: <FaLaptopCode />,
    to: "projects",
  },
  {
    title: "About",
    icon: <SiAboutdotme />,
    to: "about",
  },

  {
    title: "YouTube",
    icon: <AiOutlineYoutube />,
    to: "youtube",
  },

  {
    title: "Contact",
    icon: <MdOutlineContactMail />,
    to: "contact",
  },

];

export default items;
