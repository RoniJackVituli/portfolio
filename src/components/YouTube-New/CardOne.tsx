import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Iframe from "react-iframe";
import "./SASS/CardOne.scss";
import {YouTube} from './YouTubeData';
type Props = {
  video: YouTube;
};


const CardOne: React.FC<Props> = (props) => {
  const url = `https://www.youtube.com/embed?listType=playlist&list=${props.video.url}`
  return (
    <div className="card__container">
      <div className="right__line">
        <AnimateOnScroll animation={"fadeInRight"}>
          <Iframe
            url={url}
            className="iframe"
          />
        </AnimateOnScroll>
      </div>
      <div className="card__line"></div>
      <div className="left__line">
        <AnimateOnScroll animation={"fadeInLeft"}>
          <p>
           {props.video.description}
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default CardOne;
