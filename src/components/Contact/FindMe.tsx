import React from "react";
import { SiFacebook, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import Social from "./Social";
import "./FindMe.scss";

type SocialMeida = {
  icon: any;
  name: string;
  url: string;
};

const socialMedia: SocialMeida[] = [
  {
    icon: <SiLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ronijackvituli/",
  },
  {
    icon: <SiInstagram />,
    name: "Instagram",
    url: "https://www.instagram.com/ronijackvituli/",
  },
  {
    icon: <SiFacebook />,
    name: "Facebook",
    url: "https://www.facebook.com/RoniJackVituli",
  },
  {
    icon: <SiYoutube />,
    name: "YouTube",
    url: "https://www.youtube.com/ronijackvituli",
  },
];

const FindMe: React.FC = () => {
  return (
    <div className="FindMe-container">
      <h1>Find me here!</h1>
      <h3>I open for any suggestion or just to have a chat</h3>
      {socialMedia.map((social) => {
        return (
          <Social
            key={social.name}
            name={social.name}
            icon={social.icon}
            url={social.url}
          />
        );
      })}
    </div>
  );
};

export default FindMe;
