import React from "react";
import introImage from "../../img/intro.jpeg";
import Container from "../../Layout/Container/Container";
import classes from "./Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <Container>
      <div className={classes.introContainer}>
        <img src={introImage} alt="Introducation" />
      </div>
    </Container>
  );
};

export default Intro;
