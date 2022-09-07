import React, { useEffect } from "react";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { ScrollContainer } from "react-scroll-motion";
import { AiOutlineEnter } from "react-icons/ai";
import img from "../../img/intro.png";
import "./Works.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../Layout/Title/Title";

const Works: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ScrollContainer>
      <div className="works__container">
        <AnimateOnScroll animation={"fadeIn"}>
          <Title text="works" />
        </AnimateOnScroll>

        <div
          className="works__background"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            height: "90vh",
          }}
        ></div>

        <div className="works__contact">
          {/* Arrow Left */}
          <svg
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
          <div className="work__card">
            <div className="card__img">
              <img src={img} alt="lol" />
            </div>
            <div className="card__description">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ipsum maiores libero repudiandae. Quo quae repellendus provident
                eaque omnis eos dolorem, voluptatum amet corporis explicabo
                molestias, nam, quibusdam ducimus in.
              </p>
              <div className="card__btn">
                <span className="tech">Tech</span>
                <span className="btn">
                  VISIT <AiOutlineEnter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
};

export default Works;
