import React, { useState } from "react";
import "./SCSS/Nav.scss";
import logo from "../../img/logo.png";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Hamburger from "hamburger-react";
import Tooltip from "@mui/material/Tooltip";

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
          <Hamburger size={20} onToggle={menuMobileHandler} toggled={clicked} />
        </IconButton>
        <Drawer
          anchor="right"
          open={clicked}
          variant={"temporary"}
          onClose={menuMobileHandler}
          sx={{ zIndex: "0" }}
        >
          <MobileNav menuHandler={menuMobileHandler} />
        </Drawer>
      </div>
      <div className="navs">
        <ul>
          {items &&
            items.map((item) => {
              return (
                <Tooltip
                  title={item.title}
                  placement="bottom"
                  arrow
                  sx={{ "&.MuiTooltip-popper": { background: "red" } }}
                >
                  {/* <Link key={item.title} to={item.to} smooth={true} style={{position:'relative' , display: 'inline-block'}}>{item.icon}</Link> */}
                  <a key={item.title} href={`#${item.to}`}>
                    {item.icon}
                  </a>
                </Tooltip>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
