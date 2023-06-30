import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import classes from "./Navigation.module.scss";
import { Animated } from "react-animated-css";
import items from "./items";
import {isMobile} from 'react-device-detect';

const Navigation = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.12; // 80% of viewport height

      setIsScroll(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if(isMobile) return <></>

  if (!isScroll) {
    return (
      <Container className={classes.__navigation_static}>
        <div className={classes.list}>
          {items.map((item, i) => {
            return (
              <a key={item.title + i} href={`#${item.to}`}>
                {item.icon}
                {item.title}
              </a>
            );
          })}
        </div>
      </Container>
    );
  }

  return (
    <Animated
      className={classes.__navigation}
      animationIn="fadeInDown"
      animationOut="fadeInUp"
      isVisible={true}
    >
      <Container>
        <div className={classes.list}>
          {items.map((item, i) => {
            return (
              <a key={item.title + i} href={`#${item.to}`}>
                {item.icon}
                {item.title}
              </a>
            );
          })}
        </div>
      </Container>
    </Animated>
  );
};

export default Navigation;
