import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import classes from "./Navigation.module.scss";
import { Animated } from "react-animated-css";
import items from "./items";
import {isMobile} from 'react-device-detect';
import { motion } from "framer-motion"; // Add this import

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
    <motion.div
      className={classes.__navigation}
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }}  // Animation state
      exit={{ opacity: 0, y: 20 }}    // Exit state
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
    </motion.div>
  );
};

export default Navigation;
