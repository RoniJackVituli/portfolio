import React from "react";
import './Title.scss';
type Props = {
  text: string;
};

const Title: React.FC<Props> = ({text}) => {
  return (
    <div className="title letter">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
