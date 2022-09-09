import React from "react";
import Title from "../../Layout/Title/Title";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { ScrollContainer } from "react-scroll-motion";
import Iframe from "react-iframe";

import "./YouTube.scss";

const YouTube: React.FC = () => {
  return (
    <ScrollContainer>
      <div className="youtube__container">
        <Title text="YouTube" />
        <div className="story__container">
          <div className="card">
            <div className="sideLeft">
              <AnimateOnScroll animation={"fadeInRight"}>
                  <Iframe
                    url="http://www.youtube.com/embed/5GHpKTjEFrs"
                    width="450px"
                    height="350"
                  />
              </AnimateOnScroll>
            </div>
            <div className="line"></div>
            <div className="sideRight">
              <AnimateOnScroll animation={"fadeInLeft"}>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, adipisci quaerat reprehenderit nihil, nostrum
                  corporis optio consectetur pariatur veniam porro soluta
                  doloremque ut dolore ab voluptas. Quas doloribus non
                  reiciendis!
                </div>
              </AnimateOnScroll>
            </div>
          </div>
         
          <div className="card">
            <div className="sideLeft">
              <AnimateOnScroll animation={"fadeInRight"}>
                  <Iframe
                    url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="350"
                  />
              </AnimateOnScroll>
            </div>
            <div className="line"></div>
            <div className="sideRight">
              <AnimateOnScroll animation={"fadeInLeft"}>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, adipisci quaerat reprehenderit nihil, nostrum
                  corporis optio consectetur pariatur veniam porro soluta
                  doloremque ut dolore ab voluptas. Quas doloribus non
                  reiciendis!
                </div>
              </AnimateOnScroll>
            </div>
          </div>
         
        </div>
      </div>
    </ScrollContainer>
  );
};

export default YouTube;
