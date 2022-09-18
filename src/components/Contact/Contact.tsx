import React from "react";
import FindMe from "./FindMe";
import SendMe from "./SendMe";

import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
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
