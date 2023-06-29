import React, { useEffect, useState } from "react";
import classes from "./Loading.module.scss";
import RJV from "./RJV/RJV";
import Background from "../Wapper/Wapper";
import name from "../../img/logofullnameletters.jpeg";
import { Animated } from "react-animated-css";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 100 : prevProgress + 10;
      });
    }, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <div className={classes.loading}>
        <RJV className={classes.test} />
        <div className={classes.__message}>
          {!loading && (
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeOutDown"
              isVisible={true}
            >
              <div className={classes.fullnameLogo}>
                <img src={name} alt="" />
              </div>
              <div className={classes.typing}>
                <span>Full Stack Developer • </span>
                <span>YouTuber Creator • </span>
                <span>Software Engineer</span>
              </div>
            </Animated>
          )}
        </div>
        {!loading && <ScrollBtn />}
      </div>
    </>
  );
};

export default Loading;
