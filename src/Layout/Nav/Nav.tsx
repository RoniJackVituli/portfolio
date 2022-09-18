import React, { useState } from "react";
import "./SCSS/Nav.scss";
import logo from "../../img/logo.png";
import { Link } from "react-scroll";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Hamburger from "hamburger-react";
import items from "./items";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const menuMobileHandler = () => {
    setClicked((prevClicked) => {
      return !prevClicked;
    });
  };

  return (
    <div className="nav__bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu__mobile">
        <IconButton color="inherit" sx={{ mr: 0, p: 0 }} disableRipple={true}>
          <Hamburger size={20} onToggle={menuMobileHandler} toggled={clicked}/>
        </IconButton>
        <Drawer
          anchor="right"
          open={clicked}
          variant={"temporary"}
          onClose={menuMobileHandler}
          sx={{ zIndex: "0" }}
        >
          <MobileNav menuHandler = {menuMobileHandler}/>
        </Drawer>
      </div>
      <div className="navs">
        <ul>
          {items &&
            items.map((item) => {
              return (
                <Link
                  key={item.to}
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.icon}
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
