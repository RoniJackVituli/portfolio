import React from "react";
import "./SCSS/Nav.scss";
import logo from '../../img/logo.png'
import {BiHomeAlt} from 'react-icons/bi';
import {FaLaptopCode} from 'react-icons/fa';
import {AiOutlineProfile, AiOutlineMenu} from 'react-icons/ai';
import {FiPaperclip} from 'react-icons/fi';
import {MdOutlineContactMail} from 'react-icons/md';
import { Link } from 'react-scroll'


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
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}><BiHomeAlt/></Link></li>
        
        <li><Link activeClass="active" to="tools" spy={true} smooth={true} offset={50} duration={500}><AiOutlineProfile/></Link></li>
        <li><Link activeClass="active" to="works" spy={true} smooth={true} offset={50} duration={500}><FaLaptopCode/> </Link></li>
        <li><Link activeClass="active" to="resume" spy={true} smooth={true} offset={50} duration={500}><FiPaperclip/> </Link></li>
        <li><Link activeClass="active" to="contant" spy={true} smooth={true} offset={50} duration={500}><MdOutlineContactMail/> </Link></li>
      </ul>
    </div>
   </div>
  );
};

export default Header;
