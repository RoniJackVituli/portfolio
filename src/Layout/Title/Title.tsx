import React from "react";
import classes from "./Title.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className={classes.title}>
        <h1>{text}</h1>
      </div>
    </AnimationOnScroll>
  );
};

export default Title;
