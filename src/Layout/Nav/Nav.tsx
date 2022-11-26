import React, { useState } from "react";
import logo from "../../img/rjv.svg";
import { Drawer } from "@mui/material";
import { Fade as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import classes from "./Nav.module.scss";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import Container from "../Container/Container";

import items from "./items";
import { RootState } from "../../store";

const Header: React.FC = () => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Container className={classes.navbarContainer}>
      <div className={classes.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {!isMobile && (
        <div className={classes.list}>
          {items.map((item, i) => {
            return (
              <a key={item.title + i} href={`#${item.to}`}>
                <span>{item.icon}</span>
                {item.title}
              </a>
            );
          })}
        </div>
      )}

      {isMobile && (
        <>
          <div className={classes.listMobile}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
          <Drawer open={isOpen} style={{ zIndex: 0 }} anchor={"top"}>
            <div
              style={{ marginTop: "70px" }}
              className={classes.listMenuMobile}
            >
              <a href="#home" onClick={()=>{setOpen(false)}}>home</a>
              <a href="#works" onClick={()=>{setOpen(false)}}>works</a>
              <a href="#youtube" onClick={()=>{setOpen(false)}}>youtube</a>
              <a href="#tools" onClick={()=>{setOpen(false)}}>skills</a>
              <a href="#contact" onClick={()=>{setOpen(false)}}>contact</a>
              <a href="#resume" onClick={()=>{setOpen(false)}}>resume</a>
            </div>
          </Drawer>
        </>
      )}
      {!isMobile && (
        <div className={classes.sidenavright}>
          <ul>
            <a
              href="https://github.com/RoniJackVituli/"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ronijackvituli/"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.facebook.com/RoniJackVituli"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.youtube.com/c/RoniJackVituli"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillYoutube />
            </a>
            <div></div>
          </ul>
        </div>
      )}

      {!isMobile && (
        <div className={classes.sidenavleft}>
          <a href="mailto:rjvtechnology@gmail.com">rjvtechnology@gmail.com</a>
          <div></div>
        </div>
      )}
    </Container>
  );
};

export default Header;
