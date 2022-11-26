import React, { useRef, useState } from "react";
import classes from "./About.module.scss";
import Typing from "typewriter-effect";
import rjv from "../../img/RJV.png";
import male from '../../assets/videos/male.mp4';
import female from '../../assets/videos/female.mp4';
import { GoUnmute, GoMute } from "react-icons/go";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPause } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import introImage from "../../img/intro.jpeg";
import { Animated } from "react-animated-css";
import Container from "../../Layout/Container/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const About: React.FC = () => {
  const roles: string[] = [
    "Software Engineer.",
    "Full Stack Developer.",
    "YouTuber.",
  ];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(true);
  const gender = useSelector((state:RootState) => state.gender);
  const restartVideoHandler = () => {
    videoRef.current!.currentTime = 0;
  };
  const playStateHandler = () => {
    setPlay((prev) => {
      return !prev;
    });
    videoRef.current!.play();
  };
  const pauseStateHandler = () => {
    setPlay((prev) => {
      return !prev;
    });
    videoRef.current!.pause();
  };

  const muteStateHandler = () => {
    setMute((prev) => {
      return !prev;
    });
  };
  return (
    <Container className = {classes.aboutContainer}>
      <div className={classes.introContainer} id="home">
        <img src={introImage} alt="Introducation" />
      </div>
      <div className={classes.aboutcontent}>
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
          className={classes.video}
        >
          <video
            ref={videoRef}
            title="text"
            height="px"
            autoPlay={true}
            muted={mute}
            playsInline
            onEnded={() => {
              videoRef.current!.load();
              videoRef.current!.pause();
              setPlay((_) => {
                return false;
              });
            }}
            controls={false}
            poster={rjv}
          >
            <source src={gender.gender === 'male' ? male : female} type="video/mp4" />
          </video>
          <div className={classes.btnVideo}>
            <span onClick={muteStateHandler}>
              {mute ? <GoMute /> : <GoUnmute />}
            </span>
            <span onClick={restartVideoHandler}>
              <VscDebugRestart />
            </span>
            <span onClick={play ? pauseStateHandler : playStateHandler}>
              {play ? <BiPause /> : <BsFillPlayFill />}
            </span>
          </div>
        </Animated>
        <Animated
          animationIn="fadeInLeft"
          animationOut="fadeOut"
          isVisible={true}
          className={classes.video}
        >
          <div className={classes.aboutme}>
            <span className={classes.hi}>Hi, I'm</span>
            <h1>
              <span className={classes.letter}>R</span>oni{" "}
              <span className={classes.letter}>J</span>ack{" "}
              <span className={classes.letter}>V</span>ituli
            </h1>
            <div className={classes.typing}>
              <Typing
                options={{
                  delay: 150,
                  loop: true,
                  autoStart: true,
                  strings: roles,
                  cursor: "_",
                }}
              />
            </div>
            <p>
              I'm a Software Engineer student 4th year at Sami Shamoon College
              of Engineering. I am a highly motivated individual, and I have an
              affinity for the software world. Also, I ran a YouTube channel ,
              where I share the knowledge I gained during my degree studies. I
              have a desire to enrich and deepen my knowledge in the software
              world and discover new things.
            </p>
          </div>
        </Animated>
      </div>
    </Container>
  );
};

export default About;
