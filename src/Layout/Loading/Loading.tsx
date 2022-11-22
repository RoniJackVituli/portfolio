import React, { useEffect, useState } from "react";
import classes from "./Loading.module.scss";
import RJV from "./RJV";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import { GenderActions } from "../../store/gender-slice";
import Container from "../Container/Container";
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
    <Container className={classes.loading}>
      {/* <LogoRJV /> */}
      <div className={classes.contant}>
        <RJV className={gender.clicked && !loading ? classes.byebye : '' } style={{}} />
        {!loading && (
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
    </Container>
  );
};

export default Loading;
