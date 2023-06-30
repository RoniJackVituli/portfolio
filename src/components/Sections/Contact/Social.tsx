import React from "react";
import "./Social.scss";

type Props = {
  icon: any;
  name: string;
  url: string;
};

const Social: React.FC<Props> = ({ icon, name, url }) => {
  return (
    <a href={url} className="social-content">
      <i>{icon}</i>
      <span>{name}</span>
    </a>
  );
};

export default Social;
