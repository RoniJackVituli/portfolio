import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { motion } from "framer-motion";

type SocialNavProps = {
  className?: string;
};

const SocialNav = ({ className }: SocialNavProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        <a
          href="https://github.com/RoniJackVituli/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ronijackvituli/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.facebook.com/RoniJackVituli"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.youtube.com/c/RoniJackVituli"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillYoutube />
        </a>
        <div></div>
      </ul>
    </motion.div>
  );
};

export default SocialNav;
