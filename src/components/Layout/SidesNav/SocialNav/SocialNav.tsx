import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { Animated } from "react-animated-css";

type SocialNavProps = {
  className?: string;
};

const SocialNav = ({ className }: SocialNavProps) => {
  return (
    <Animated
      animationIn="fadeInUp"
      animationOut="fadeInDown"
      isVisible={true}
      className={className}
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
    </Animated>
  );
};

export default SocialNav;
