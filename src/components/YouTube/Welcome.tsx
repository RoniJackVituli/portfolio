import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import "./Welcome.scss";
import img from "../../img/profile.jpeg";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="line">
        <div className="welcome__sideLeft">
          <AnimateOnScroll animation={"fadeInRight"}>
            <div className="circular--landscape">
              <a href="https://www.youtube.com/c/RoniJackVituli">
                <img src={img} alt="profile" />
              </a>
            </div>
            <div className="title--profile">Roni Jack Vituli</div>
          </AnimateOnScroll>
        </div>

        <div className="welcome__sideRight">
          <AnimateOnScroll animation={"fadeInLeft"}>
            <div className="description">
              If you've made it this far, then I'd like to introduce you to my
              YouTube channel. My YouTube channel deals with programming
              languages and the software world, in addition The channel also
              deals in tech products. You are welcome to take a look at a number
              of videos below.
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
