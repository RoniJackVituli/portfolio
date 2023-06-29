import React from "react";
import classes from "./Container.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container: React.FC<Props> = ({ children, className,id }) => {
  return (
    <div className={classes.mainContainer + " " + className} id={id}>{children}</div>
  );
};

export default Container;
