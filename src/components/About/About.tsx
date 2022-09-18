import React from "react";
import "./SCSS/About.scss";
import Avatar from "../Avatar/Avatar";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import "animate.css/animate.min.css";
import { ScrollContainer } from "react-scroll-motion";
import FullName from "../FullName/FullName";
import Typing from "typewriter-effect";

const About: React.FC = () => {
  
  const roles: string[] = [
    "Software Engineering.",
    "Full Stack Developer.",
    "YouTuber.",
  ];

  return (
    <ScrollContainer>
      <AnimateOnScroll animation={"flipIn"}>
        <div className="about" id="home">
          <div className="contant">
            <div className="content-tertiary">
              <h1>Hi, I'm</h1>
            </div>
            <div className="content-primary">
              <FullName />
            </div>
            <div className="content-secondary">
              <Typing
                options={{
                  loop: true,
                  autoStart: true,
                  strings: roles,
                  cursor: "|",
                }}
              />
            </div>
            <div className="contentme">
              <p>
                I'm a Software Engineer student 4th year at Sami Shamoon College
                of Engineering. I am a highly motivated individual, and I have an
                affinity for the software world. Also, I ran a YouTube channel ,
                where I share the knowledge I gained during my degree studies. I
                have a desire to enrich and deepen my knowledge in the software
                world and discover new things.
              </p>
            </div>
          </div>
          <div className="avatar">
            <Avatar />
          </div>
        </div>
      </AnimateOnScroll>
    </ScrollContainer>
  );
};

export default About;
