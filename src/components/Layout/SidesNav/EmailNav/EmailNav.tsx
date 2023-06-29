import React from "react";
import { Animated } from "react-animated-css";

type EmailNavProps = {
  className?: string;
};

const EmailNav = ({ className }: EmailNavProps) => {
  return (
    <Animated
      animationIn="fadeInUp"
      animationOut="fadeInDown"
      isVisible={true}
      className={className}
    >
      <a href="mailto:rjvtechnology@gmail.com">rjvtechnology@gmail.com</a>
      <div></div>
    </Animated>
  );
};

export default EmailNav;
