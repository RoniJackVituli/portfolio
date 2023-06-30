import React from "react";
import classes from "./Skills.module.scss";
import { Tooltip } from "@mui/material";
import { skills } from "./tools";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    <div className={classes.__skills}>
      <h1>My Skills</h1>
      <div className={classes.__pyramids}>
        <div className={classes.pyramid}>
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className={classes.row}>
              {Array(row + 1)
                .fill("")
                .map((_, col) => {
                  const index = (row * (row + 1)) / 2 + col;
                  const skill = skills[index];
                  return (
                    <div key={col} className={classes.circle}>
                      <Tooltip
                        title={skill.toolTip}
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
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimationOnScroll
                            animateIn="animate__bounceIn"
                            delay={40}
                            animateOnce
                          >
                            <img
                              src={skill.path + skill.name + "-color.svg"}
                              alt="no"
                            />
                          </AnimationOnScroll>
                        </a>
                      </Tooltip>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        <div className={classes.flippedPyramid}>
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className={classes.row}>
              {Array(row + 1)
                .fill("")
                .map((_, col) => {
                  const index = 10 + (row * (row + 1)) / 2 + col;
                  const skill = skills[index];
                  return (
                    <div key={col} className={classes.circle}>
                      <Tooltip
                        title={skill.toolTip}
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
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AnimationOnScroll
                            animateIn="animate__bounceIn"
                            delay={40}
                            animateOnce
                          >
                            <img
                              src={skill.path + skill.name + "-color.svg"}
                              alt="no"
                            />
                          </AnimationOnScroll>
                        </a>
                      </Tooltip>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
