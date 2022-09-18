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
    title: "Tools",
    icon: <AiOutlineProfile />,
    to: "tools",
  },
  {
    title: "Contact",
    icon: <MdOutlineContactMail />,
    to: "contact",
  },
  {
    title: "Resume",
    icon: <FiPaperclip />,
    to: "resume",
  },
];

export default items;
