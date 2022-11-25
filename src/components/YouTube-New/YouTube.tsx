import React, { Fragment } from "react";
import Title from "../../Layout/Title/Title";
import Iframe from "react-iframe";
import { AnimateOnScroll } from "animate-on-scroll-framer";
// import CardOne from "./CardOne";
// import CardTwo from "./CardTwo";
import Welcome from "./Welcome";
import classes from "./YouTube.module.scss";
import youtubeData from "../YouTube-New/YouTubeData";
import Container from "../../Layout/Container/Container";

const YouTube: React.FC = () => {
  const url = `https://www.youtube.com/embed?listType=playlist&list=`;
  return (
    <Container className={classes.youtubeContainer}>
      <h1>YoTube</h1>
      <h4>COME TO LEARN MORE</h4>
      <Welcome />
      {youtubeData.map((video, i) => {
        if (i % 2 === 0) {
          return (
            <div className={classes.playlists} key={i}>
              <AnimateOnScroll animation={"fadeInLeft"}>
                <div className={classes.playlisyDescription}>
                  <h3>{video.title}</h3>
                  <p>
                    {video.description}
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation={"fadeInRight"}>
                <div className={classes.video}>
                  <Iframe url={url + video.url} className={classes.iframe} />
                </div>
              </AnimateOnScroll>
            </div>
          );
        }
        return (
          <div className={classes.playlists + ' ' + classes.reverse} key={i}>
            <AnimateOnScroll animation={"fadeInRight"}>
              <div className={classes.playlisyDescription}>
                <h3>{video.title}</h3>
                <p>
                  {video.description}
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation={"fadeInLeft"}>
              <div className={classes.video}>
                <Iframe url={url + video.url} className={classes.iframe} />
              </div>
            </AnimateOnScroll>
          </div>
        );
      })}
    </Container>
  );
};

export default YouTube;
