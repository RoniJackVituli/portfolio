import React from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import "./SASS/Welcome.scss";
import img from "../../img/profile.jpeg";

const Welcome: React.FC = () => {
  return (
    <div className="welcome__container">
      <div className="left__line">
          <div className="circular--landscape">
            <a href="https://www.youtube.com/c/RoniJackVituli">
              <img src={img} alt="profile" />
            </a>
          </div>
      </div>
      <div className="right__line">
          <p>
            If you've made it this far, then I'd like to introduce you to my<br/>            YouTube channel. My YouTube channel deals with programming languages, Software world, Tech Products and more.<br/>
            You are welcome to take a look at a my videos.
          </p>
      </div>
    </div>
  );
};

export default Welcome;
