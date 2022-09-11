import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Iframe from "react-iframe";
import "./CardLeft.scss";
import { YouTube } from "./YouTubeData";

type Props = {
  video: YouTube;
};

const CardLeft: React.FC<Props> = (props) => {
  return (
    <div className="cardleft">
      <div className="line">
        <div className="cardleft__sideLeft">
          <AnimateOnScroll animation={"fadeInRight"}>
            <Iframe
              className="iframe"
              url="http://www.youtube.com/embed/bRmxwIEcYGA"
            />
          </AnimateOnScroll>
        </div>

        <div className="cardleft__sideRight">
          <AnimateOnScroll animation={"fadeInLeft"}>
            <div>{props.video.description}</div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
