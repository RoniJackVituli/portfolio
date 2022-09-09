import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineProfile} from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";

const items = [
  {
    icon: <BiHomeAlt />,
    to: "home",
  },
  {
    icon: <FaLaptopCode />,
    to: "works",
  },
  {
    icon: <AiOutlineProfile />,
    to: "tools",
  },

  {
    icon: <FiPaperclip />,
    to: "resume",
  },
  {
    icon: <MdOutlineContactMail />,
    to: "contact",
  },
];

export default items;
