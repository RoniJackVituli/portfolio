import React, { useEffect, useState } from "react";
import classes from "./Loading.module.scss";
import RJV from "./RJV";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import { GenderActions } from "../../store/gender-slice";
// import Container from "../Container/Container";
import background from "../../assets/imgs/background.jpg";
import { RootState } from "../../store";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const gender = useSelector((state: RootState) => state.gender);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 100 : prevProgress + 10;
      });
    }, 380);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  const genderHandler = (gender: string) => {
    dispatch(GenderActions.clickedGender({ gender }));
  };

  return (
    <>
      <div className={classes.introContainer}>
        <img src={background} alt="Introducation" />
      </div>
      <div className={classes.loading}>
        {/* <div className={classes.logo}>
        <img src={logo} alt="Introducation" />
      </div> */}
        <RJV className={gender.clicked && !loading ? classes.byebye : ""} />
        {!false && (
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            isVisible={true}
            className={classes.select}
            style={{ visibility: `${gender.clicked ? "hidden" : ""}` }}
          >
            <span
              onClick={() => {
                genderHandler("male");
              }}
            >
              male
            </span>
            <span
              onClick={() => {
                genderHandler("female");
              }}
            >
              female
            </span>
          </Animated>
        )}
      </div>
    </>
  );
};

export default Loading;
