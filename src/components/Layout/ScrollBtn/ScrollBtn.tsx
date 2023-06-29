import React from "react";
import "./ScrollBtn.scss";
import { Animated } from "react-animated-css";

const ScrollBtn = () => {
  return (
    <Animated
      animationIn="fadeInDown"
      animationOut="fadeInDown"
      isVisible={true}
      className="demo"
    >
      <section id="section07">
        <a href="#youtube">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </section>
      <span>Scroll</span>
    </Animated>
  );
};

export default ScrollBtn;
