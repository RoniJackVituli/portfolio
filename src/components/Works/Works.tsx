// import React, { useState } from "react";
// // import { AnimateOnScroll } from "animate-on-scroll-framer";
// import { ScrollContainer } from "react-scroll-motion";
// import { AiOutlineEnter } from "react-icons/ai";
// import { SiGithub } from "react-icons/si";
import Title from "../../Layout/Title/Title";
import "./Works.scss";
// import Title from "../../Layout/Title/Title";
// import projects from "./worksData";

const Works: React.FC = () => {
  // const [current, setCurrent] = useState<number>(0);
  // const length = projects.length;

  // const moveForward = () => {
  //   setCurrent((prevCurrent) => {
  //     return prevCurrent === length - 1 ? 0 : prevCurrent + 1;
  //   });
  // };

  // const backForward = () => {
  //   setCurrent((prevCurrent) => {
  //     return prevCurrent === 0 ? projects.length - 1 : prevCurrent - 1;
  //   });
  // };

  return (
    <div className="tools">
      <Title text="Tools"/>
    </div>
  );
};

export default Works;
