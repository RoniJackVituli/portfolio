import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineProfile, AiOutlineYoutube} from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";

const items = [
  {
    icon: <BiHomeAlt />,
    to: "home",
  },
  {
    icon: <AiOutlineProfile />,
    to: "tools",
  },
  {
    icon: <FaLaptopCode />,
    to: "works",
  },

  {
    icon: <AiOutlineYoutube/>,
    to: "youtube"
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
