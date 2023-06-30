import React from "react";
import Container from "../../Layout/Container/Container";
import classes from "./Projects.module.scss";
// import { Animated } from "react-animated-css";
import { projects } from "./ProjectsData";
import { AnimateOnScroll } from "animate-on-scroll-framer";

import SectionTitle from "../../Layout/SectionTitle/SectionTitle";
import Project from "./Project/Project";

const Projects = () => {
  return (
    <Container className={classes.__projects_container} id={"projects"}>
      <SectionTitle title="Projects" subtitle="A Compilation of Experiences" />

      <AnimateOnScroll animation={"fadeIn"}>
        {projects.map((project, _idx) => {
          return <Project project={project} key={_idx} />;
        })}
      </AnimateOnScroll>
    </Container>
  );
};

export default Projects;
