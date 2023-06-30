import React from "react";
import classes from "./Title.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {
  text: string;
  className?: string;
};

const Title: React.FC<Props> = ({ text,className }) => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className={classes.title + " " + className}>
        <h1>{text}</h1>
      </div>
    </AnimationOnScroll>
  );
};

export default Title;
