import React from "react";
import "./SCSS/Nav.scss";
import logo from '../../img/logo.png'
import {BiHomeAlt} from 'react-icons/bi';
import {FaLaptopCode} from 'react-icons/fa';
import {AiOutlineProfile, AiOutlineMenu} from 'react-icons/ai';
import {FiPaperclip} from 'react-icons/fi';
import {MdOutlineContactMail} from 'react-icons/md';


const Header: React.FC = () => {
  
  
  
  return (
   <div className="nav__bar">
    <div className="logo">
      <img src={logo} alt="logo"/>
    </div>
    <div className="menu__mobile">
      <AiOutlineMenu/>
    </div>
    <div className="navs">
      <ul>
        <li><BiHomeAlt/></li>
        <li><AiOutlineProfile/></li>
        <li><FaLaptopCode/></li>
        <li><FiPaperclip/></li>
        <li><MdOutlineContactMail/></li>
      </ul>
    </div>
   </div>
  );
};

export default Header;
