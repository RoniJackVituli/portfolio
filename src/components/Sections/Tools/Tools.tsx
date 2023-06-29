import React from "react";
import classes from "./Tools.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Tooltip } from "@mui/material";
import Container from "../../Layout/Container/Container";
import { skills } from "./Skills";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

const Tools: React.FC = () => {
  return (
    <Container className={classes.containerTools} id={"tools"}>
      <SectionTitle
        title="skills"
        subtitle="hover over a skill for more info"
      />
      <div className={classes.__table}>
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
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <AnimationOnScroll
                    animateIn="animate__bounceIn"
                    delay={40}
                    animateOnce
                  >
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
