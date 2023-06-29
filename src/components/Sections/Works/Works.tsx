import React, { Fragment, useState } from "react";
import Container from "../../Layout/Container/Container";
import classes from "./Works.module.scss";
import { Animated } from "react-animated-css";
import { projects } from "./ProjectsData";
import { SiGithub } from "react-icons/si";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

import { FaLink } from "react-icons/fa";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

const Works = () => {
  const [current, setCurrent] = useState<number>(0);
  const length = projects.length;

  const moveForward = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent === length - 1 ? 0 : prevCurrent + 1;
    });
  };

  const backForward = () => {
    setCurrent((prevCurrent) => {
      return prevCurrent === 0 ? projects.length - 1 : prevCurrent - 1;
    });
  };

  return (
    <Container className={classes.workContainer} id={"works"}>

      <SectionTitle
        title="Works"
        subtitle="all the works i did"
      />
      <AnimateOnScroll animation={"fadeInDown"}>
        <div className={classes.showproject}>
          {projects.map((p, i) => {
            if (i === current) {
              return (
                <Fragment key={i}>
                  <Animated
                    animationIn="zoomIn"
                    animationOut="fadeOut"
                    isVisible={true}
                    className={classes.video}
                  >
                    <img src={p.img} alt="mac" />
                  </Animated>
                  <div className={classes.BtnNextBack}>
                    <MdOutlineArrowBackIosNew
                      onClick={backForward}
                      style={{ cursor: "pointer" }}
                    />
                    <MdOutlineArrowForwardIos
                      onClick={moveForward}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className={classes.content}>
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                    <div className={classes.btn}>
                      {p.github && (
                        <a href={p.github} className={classes.git}>
                          {<SiGithub />}
                        </a>
                      )}
                      <a
                        href={p.url}
                        className={classes.link}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </Fragment>
              );
            }
            return <Fragment key={i}></Fragment>;
          })}
        </div>
      </AnimateOnScroll>
    </Container>
  );
};

export default Works;
