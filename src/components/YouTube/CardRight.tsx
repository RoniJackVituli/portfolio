import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Iframe from "react-iframe";
import "./CardRight.scss";
import { YouTube } from "./YouTubeData";

type Props = {
  video: YouTube;
};

const CardRight: React.FC<Props> = (props) => {
  return (
    <div className="cardright">
      <div className="line">
        <div className="cardright__sideLeft">
          <AnimateOnScroll animation={"fadeInRight"}>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reprehenderit quibusdam consequatur numquam, modi beatae ratione explicabo odio quisquam neque voluptates quas, tenetur quaerat esse nulla dicta. Voluptatibus, numquam ipsam?</div>
          </AnimateOnScroll>
        </div>

        <div className="cardright__sideRight">
          <AnimateOnScroll animation={"fadeInLeft"}>
            <Iframe
              url="http://www.youtube.com/embed/bRmxwIEcYGA"
              className="iframe"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default CardRight;
