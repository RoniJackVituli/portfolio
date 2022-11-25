import React, { useState } from "react";
import logo from "../../img/rjv.svg";
// import { Drawer } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
import { Fade as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
// import Tooltip from "@mui/material/Tooltip";
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
        <div className={classes.listMobile}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
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
