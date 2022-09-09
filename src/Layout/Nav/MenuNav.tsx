import React, { useState, useRef } from "react";
import "./SCSS/MenuNav.scss";
import items from "./SCSS/items";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

type Props = {
  openHandler: () => void;
  closeHandler: () => void;
};

const MenuNav: React.FC<Props> = (props) => {
  const side = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);

  const close = () => {
    setTimeout(() => {
      props.closeHandler();
    }, 500);
    setOpen(false);
  };

  return (
    <div ref={side} className={open ? "sidenav__active" : "sideClose"}>
      <div className="closeIcon">
        <AiOutlineClose onClick={close} />
      </div>
      {items &&
        items.map((item) => {
          return <div className="item">  
          <Link
          activeClass="active"
          onClick={close}
          to={item.to}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        > {item.icon}</Link></div>;
        })}
    </div>
  );
};

export default MenuNav;
