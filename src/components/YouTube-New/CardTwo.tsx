import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Iframe from "react-iframe";
import "./SASS/CardTwo.scss";
import {YouTube} from './YouTubeData';
type Props = {
  video: YouTube;
};

const CardTwo: React.FC<Props> = (props) => {

  const url = `https://www.youtube.com/embed?listType=playlist&list=${props.video.url}`


  return (
    <div className="cardtwo__container">
      <div className="left__line">
        <AnimateOnScroll animation={"fadeInRight"}>
          <p>{props.video.description}</p>
        </AnimateOnScroll>
      </div>
      <div className="cardtwo__line"></div>
      <div className="right__line">
        <AnimateOnScroll animation={"fadeInLeft"}>
          <Iframe
            url={url}
            className="iframe"
           
          />
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default CardTwo;
