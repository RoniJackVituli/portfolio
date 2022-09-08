import React, { useState } from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { ScrollContainer } from "react-scroll-motion";
import { AiOutlineEnter } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import "./Works.scss";
import Title from "../../Layout/Title/Title";
import projects from "./worksData";


const Works: React.FC = () => {
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
    <ScrollContainer>
      <div className="works__container">
        <AnimateOnScroll animation={"fadeIn"}>
          <Title text="works" />
        </AnimateOnScroll>
        {projects.map((project, index) => {
          return (
            <div>
            {index === current && (<>
                <div
                  className="works__background"
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    height: "90vh",
                  }}
                ></div>
                <div className="works__contact">
                  {/* Arrow Left */}
                  <svg
                    onClick={backForward}
                    width="76"
                    height="76"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="left__arrow"
                  >
                    <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
                    <path d="M5.625 12h13.688"></path>
                  </svg>
                  {/* Arrow Right */}
                  <svg
                    onClick={moveForward}
                    width="76"
                    height="76"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="right__arrow"
                  >
                    <path d="m12.563 5.25 6.75 6.75-6.75 6.75"></path>
                    <path d="M18.375 12H4.687"></path>
                  </svg>
                  <div className="work__card box-floating">
                    <div className="card__img">
                      <img src={project.img} alt="lol" />
                    </div>
                    <div className="card__description">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="card__btn">
                        <span className="tech">{project.tech}</span>
                        <a className="btn" href={`${project.url}`}>
                          Visit <AiOutlineEnter />
                        </a>
                        <a className="git" href={`${project.github}`}>
                          <SiGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>)}
            </div>
          );
        })}
      </div>
    </ScrollContainer>
  );
};

export default Works;
