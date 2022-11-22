import React from "react";
import { ScrollContainer } from "react-scroll-motion";
import "./SCSS/Tools.scss";
import Title from "../../Layout/Title/Title";
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
import { AnimationOnScroll } from "react-animation-on-scroll";
import Container from "../../Layout/Container/Container";

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
    <Container>
      <div className="container__tools" id="tools">
          <Title text={"TOOLING"} />
        <AnimationOnScroll animateIn="fadeInUp">
          <section className="section__tool">
            <div className="tools__box">
              {tools.map((tool) => (
                <div
                  key={Math.random().toLocaleString()}
                  className="tool__cell"
                >
                  <div className="cell__icon">
                    <p>{tool.icon}</p>
                  </div>
                  <div className="cell__name">
                    <p>{tool.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimationOnScroll>
      </div>
    </Container>
  );
};

export default Tools;
