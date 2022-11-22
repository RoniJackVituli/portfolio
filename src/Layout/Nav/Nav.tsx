import React from "react";
import logo from "../../img/logo.png";
// import { Drawer } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import Hamburger from "hamburger-react";
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

const Header: React.FC = () => {
  return (
    <Container className={classes.navbarContainer}>
      <div className={classes.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
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
      <div className={classes.sidenavright}>
        <ul>
          <li>
            <AiFillGithub />
          </li>
          <li>
            <AiFillLinkedin />
          </li>
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <AiFillYoutube />
          </li>
          <div></div>
        </ul>
      </div>
      <div className={classes.sidenavleft}>
        <a href="mailto:rjvtechnology@gmail.com">rjvtechnology@gmail.com</a>
        <div></div>
      </div>
    </Container>
  );
};

export default Header;
