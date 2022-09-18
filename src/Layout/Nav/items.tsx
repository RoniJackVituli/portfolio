import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineProfile, AiOutlineYoutube } from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";

const items = [
  {
    title: "Home",
    icon: <BiHomeAlt />,
    to: "home",
  },
  {
    title: "Tools",
    icon: <AiOutlineProfile />,
    to: "tools",
  },
  {
    title: "Works",
    icon: <FaLaptopCode />,
    to: "works",
  },

  {
    title: "YouTube",
    icon: <AiOutlineYoutube />,
    to: "youtube",
  },
  {
    title: "Resume",
    icon: <FiPaperclip />,
    to: "resume",
  },
  {
    title: "contact",
    icon: <MdOutlineContactMail />,
    to: "contact",
  },
];

export default items;
