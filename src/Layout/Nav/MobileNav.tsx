import React from "react";
import { Link } from "react-scroll";

import "./MobileNav.scss";
import items from "./items";

type Props = { 
  menuHandler: () => void;
}

const MobileNav: React.FC<Props> = (props) => {
  return (
    <div className="mobilenav-container">
      {items.map((item) => (
        <Link
          key={item.to}
          activeClass="active"
          to={item.to}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={props.menuHandler}
          className="item"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
