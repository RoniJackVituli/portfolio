import React from "react";
import "./Footer.scss";
import FullName from "../FullName/FullName";


const Footer = () => {
  return <div className="footer-container">
    <FullName/>
    <div className="credits">
      <span>&copy; Copyright 2022</span>
      <p>Built from scratch with <span className="heart">&#128153;</span>Powered by <b>Roni Jack Vituli</b></p>
    </div>
  </div>;
};

export default Footer;
