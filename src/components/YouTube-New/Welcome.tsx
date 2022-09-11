import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import "./SASS/Welcome.scss";
import img from "../../img/profile.jpeg";

const Welcome: React.FC = () => {
  return (
    <div className="welcome__container">
      <div className="right__line">
        <AnimateOnScroll animation={"fadeInRight"}>
          <div className="circular--landscape">
            <a href="https://www.youtube.com/c/RoniJackVituli">
              <img src={img} alt="profile" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
      <div className="card__line"></div>
      <div className="left__line">
        <AnimateOnScroll animation={"fadeInLeft"}>
          <p>
            If you've made it this far, then I'd like to introduce you to my
            YouTube channel. My YouTube channel deals with programming languages
            and the software world, in addition The channel also deals in tech
            products. You are welcome to take a look at a number of videos
            below.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Welcome;
