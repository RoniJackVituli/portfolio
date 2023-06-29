import React from "react";
import FindMe from "./FindMe";
import SendMe from "./SendMe";

import "./Contact.scss";
import Container from "../../Layout/Container/Container";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

const Contact: React.FC = () => {
  return (
    <Container className="contact-container" id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="I'd love to talk with you about anything!"
      />
      <div className="contact-cards">
        <div className="card-right">
          <SendMe />
        </div>
        <div className="card-left">
          <FindMe />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
