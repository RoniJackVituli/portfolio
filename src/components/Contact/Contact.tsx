import React from "react";
import FindMe from "./FindMe";
import SendMe from "./SendMe";
import Title from "../../Layout/Title/Title";

import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="title-contact">
      <h1>Get In Touch</h1>
      <h4>I would love to talk to you about anything!</h4>
      </div>
      <div className="contact-cards">
        <div className="card-right">
          <SendMe />
        </div>
        <div className="card-left">
          <FindMe />
        </div>
      </div>
    </div>
  );
};

export default Contact;
