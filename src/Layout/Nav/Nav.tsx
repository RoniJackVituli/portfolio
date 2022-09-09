import React, {useState} from "react";
import "./SCSS/Nav.scss";
import logo from "../../img/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import MenuNav from "./MenuNav";
import items from "./SCSS/items";



const Header: React.FC = () => {

  const [isOpen , setIsOpen] = useState(false);

  const open = () =>{
    setIsOpen(true);
  }
  const close = () => {
    setIsOpen(false);
  }

  return (
    <div className="nav__bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu__mobile">
        {isOpen && <MenuNav openHandler={open} closeHandler={close}/>}
        {!isOpen && <AiOutlineMenu onClick={open}/>}

      </div>
      <div className="navs">
        <ul>
          {items &&
            items.map((item) => {
              return (
                <li key={item.to}>
                  <Link
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {item.icon}
                  </Link>
                </li>
              );
            })}

        </ul>
      </div>
    </div>
  );
};

export default Header;
