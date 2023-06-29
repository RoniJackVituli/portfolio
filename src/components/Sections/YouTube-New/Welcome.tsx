import React from "react";
import "./SASS/Welcome.scss";
import img from "../../../img/profile.jpeg";

const Welcome: React.FC = () => {
  return (
    <div className="welcome__container">
      <div className="profileImg">
          <div className="circular--landscape">
            <a href="https://www.youtube.com/c/RoniJackVituli" target={"_blank"} rel="noreferrer" >
              <img src={img} alt="profile" />
            </a>
          </div>
      </div>
      <div className="profileText">
          <p>
            If you've made it this far, then I'd like to introduce you to my<br/>        YouTube channel. My YouTube channel deals with programming languages, Software world, Tech Products and more.<br/>
            You are welcome to take a look at a my videos.
          </p>
      </div>
    </div>
  );
};

export default Welcome;
