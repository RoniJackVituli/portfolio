import React from "react";
import Iframe from "react-iframe";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import Welcome from "./Welcome";
import classes from "./YouTube.module.scss";
import youtubeData from "./YouTubeData";
import Container from "../../Layout/Container/Container";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

const YouTube: React.FC = () => {
  const url = `https://www.youtube.com/embed?listType=playlist&list=`;
  return (
    <Container className={classes.youtubeContainer} id={"youtube"}>
      <SectionTitle title="YouTube" subtitle="come to learn more" />
      <Welcome />
      {youtubeData.map((video, i) => {
        if (i % 2 === 0) {
          return (
            <div className={classes.playlists} key={i}>
              <AnimateOnScroll animation={"fadeInLeft"}>
                <div className={classes.playlisyDescription}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
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
          <div className={classes.playlists + " " + classes.reverse} key={i}>
            <AnimateOnScroll animation={"fadeInRight"}>
              <div className={classes.playlisyDescription}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
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
