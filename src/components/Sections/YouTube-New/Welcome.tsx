import React from "react";
import "./SASS/Welcome.scss";
import img from "../../../img/profile.jpeg";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="rounded-full w-35 h-35 overflow-hidden shadow-md shadow-black">
        <a
          className="w-full h-full"
          href="https://www.youtube.com/c/RoniJackVituli"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={img} alt="profile" className="w-full h-full object-cover" />
        </a>
      </div>
      <div className="text-center">
        <p>
          If you've made it this far, then I'd like to introduce you to my
          <br /> YouTube channel. My YouTube channel deals with programming
          languages, Software world, Tech Products and more.
          <br />
          You are welcome to take a look at a my videos.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
