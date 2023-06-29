import React, { useEffect, useState } from "react";
import classes from "./Welcome.module.scss";
import { Animated } from "react-animated-css";

import RJV from "../../Layout/Loading/RJV/RJV";
import Wapper from "../../Layout/Wapper/Wapper";
import ScrollBtn from "../../Layout/ScrollBtn/ScrollBtn";
import FullName from "../../Layout/FullName/FullName";
import Roles from "../../Layout/Roles/Roles";
import { ShowContentActions } from "../../../store/showContent-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import SidesNav from "../../Layout/SidesNav/SidesNav";
import Navigation from "../../Layout/Navigation/Navigation";


const Welcome: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const showContent = useSelector((state: RootState) => state.showContent.show);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 100 : prevProgress + 10;
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && !showContent) {
      dispatch(ShowContentActions.show());
    }
    //eslint-disable-next-line
  }, [progress]);

  return (
    <section className={classes.__welcome_container} id="home">
      <Wapper>
        {showContent && (
          <>
            <Navigation />
            <SidesNav />
            <ScrollBtn />
          </>
        )}
        <RJV className={classes.__logo} />
        <div className={classes.__message}>
          {showContent && (
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeOutDown"
              isVisible={true}
            >
              <FullName />
              <Roles className={classes.typing} />
            </Animated>
          )}
        </div>
      </Wapper>
    </section>
  );
};

export default Welcome;
