import React from "react";
import FullName from "../FullName/FullName";
import classes from "./Footer.module.scss";
import Container from "../Container/Container";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.__footer_container}>
      <Container className={classes.__footer}>
        <div className={classes.__content}>
          <FullName className={classes.__full_name} />
          <div className={classes.credits}>
            <span>&copy; Copyright {year}</span>
            <p>
              Built from scratch with{" "}
              <span className={classes.heart}>&#128153;</span>
              Powered by <b>Roni Jack Vituli</b>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
