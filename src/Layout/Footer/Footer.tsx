import React from "react";
import "./Footer.scss";
import name from '../../img/logofullnameletters.jpeg';


const Footer = () => {
  return <div className="footer-container">
    <div className="fullnameLogo">
      <img src={name} alt='name'/>
    </div>
    <div className="credits">
      <span>&copy; Copyright 2022</span>
      <p>Built from scratch with <span className="heart">&#128153;</span>Powered by <b>Roni Jack Vituli</b></p>
    </div>
  </div>;
};

export default Footer;
