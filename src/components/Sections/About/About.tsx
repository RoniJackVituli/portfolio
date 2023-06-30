import { Container } from "@mui/material";
import React from "react";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";
import classes from "./About.module.scss";
import Text from "./Text/Text";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <Container className={classes.__about_container} id="about">
      <SectionTitle title="About Me" subtitle="get to know me!" />
      <div className={classes.__about_section}>
        <Text />
        <Profile/>
      </div>
      <Skills/>
    </Container>
  );
};

export default About;
