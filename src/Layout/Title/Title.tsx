import React from "react";
import "./Title.scss";
type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="title">
      <div className="title__border">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
