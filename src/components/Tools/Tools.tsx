import React from "react";
import classes from "./Tools.module.scss";
import { Animated } from "react-animated-css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiCplusplus,
  SiJava,
  SiDjango,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { Box, Grid, Paper, Tooltip } from "@mui/material";
import Container from "../../Layout/Container/Container";
import { skills } from "./Skills";
type Tool = {
  name: string;
  icon: any;
};
const Tools: React.FC = () => {
  const tools: Tool[] = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NodeJs", icon: <FaNodeJs /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Mongodb", icon: <SiMongodb /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Java", icon: <SiJava /> },
    { name: "HTML", icon: <AiOutlineHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  return (
    <Container className={classes.containerTools}>
      <div className={classes.skills}>
        <h1>skills</h1>
        <h4>HOVER OVER A SKILL FOR MORE INFO</h4>
        <div className={classes.table}>
          {skills.map((value, i) => (
            <div key={i} className={classes.circle}>
              <Tooltip
                title={value.toolTip}
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      border: "solid skyblue 1px",
                      background: "#83d8fc97",
                      color: "white",
                      fontWeight: "500",
                    },
                  },
                }}
              >
                <a href={value.link}>
                  <AnimationOnScroll animateIn="animate__bounceIn" delay={40} animateOnce>
                    <img
                      src={value.path + value.name + "-color.svg"}
                      alt="no"
                    />
                  </AnimationOnScroll>
                </a>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tools;
