import React from "react";
import { ScrollContainer } from "react-scroll-motion";
import "./SCSS/Tools.scss";
import Title from "../../Layout/Title/Title";
import {FaReact ,FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiCss3 ,SiJavascript, SiPython, SiMongodb, SiCplusplus, SiJava} from 'react-icons/si';
import {AiOutlineHtml5} from 'react-icons/ai';
type Tool = {
  name: string;
  icon: any;
};

const Tools: React.FC = () => {

  const tools: Tool[] = [
    { name: "React", icon: <FaReact/> },
    { name: "TypeScript", icon: <SiTypescript/> },
    { name: "NodeJs", icon: <FaNodeJs/> },
    { name: "C++", icon: <SiCplusplus/> },
    { name: "Mongodb", icon: <SiMongodb/> },
    { name: "Python", icon: <SiPython/> },
    { name: "Java", icon: <SiJava/> },
    { name: "HTML", icon: <AiOutlineHtml5/> },
    { name: "CSS", icon: <SiCss3/> },
    { name: "JavaScript", icon: <SiJavascript/> },
  ];

  return (
    <ScrollContainer>
      <section className="section__tool">
        <Title text={"TOOLING"} />
        <div className="tools__box">
          {tools.map((tool) => (
            <div key={Math.random().toLocaleString()} className="tool__cell">
              <div className="cell__icon"><p>{tool.icon}</p></div>
              <div className="cell__name"><p>{tool.name}</p></div>
            </div>
          ))}
        </div>
      </section>
    </ScrollContainer>
  );
};

export default Tools;
