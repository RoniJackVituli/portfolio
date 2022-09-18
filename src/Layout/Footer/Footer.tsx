import React from "react";
import "./Footer.scss";
import name from '../../img/logofullnameletters.jpeg';


const Footer = () => {
  return <div className="footer-container">
    <div className="fullnameLogo">
      <img src={name} alt='name'/>
    </div>
    <div className="credits">
      <span>@ Copyright 2022</span>
      <span>All rights reseved. Powered by <b>Roni Jack Vituli</b></span>
    </div>
  </div>;
};

export default Footer;
