import React from "react";
import introImage from "../../img/intro.jpeg";
import "./SASS/Intro.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      {/* <img src={introImage} alt='Intro' loading="lazy" /> */}
      <LazyLoadImage src={introImage} effect="blur"/>      
    </div>
  );
};

export default Intro;
