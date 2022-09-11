import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Iframe from "react-iframe";
import "./CardRight.scss";
import { YouTube } from "./YouTubeData";

type Props = {
  video: YouTube;
};

const CardRight: React.FC<Props> = (props) => {

  const url = `https://www.youtube.com/embed?listType=playlist&list=${props.video.url}`

  return (
    <div className="cardright">
      <div className="line">
        <div className="cardright__sideLeft">
          <AnimateOnScroll animation={"fadeInRight"}>
            <div>{props.video.description}</div>
          </AnimateOnScroll>
        </div>

        <div className="cardright__sideRight">
          <AnimateOnScroll animation={"fadeInLeft"}>
            <Iframe
              url={url}
              className="iframe"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default CardRight;
