import React from "react";
import Title from "../../Layout/Title/Title";

import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Welcome from "./Welcome";
import "./SASS/YouTube.scss";
import youtubeData from "../YouTube-New/YouTubeData";
import Container from "../../Layout/Container/Container";

const YouTube: React.FC = () => {
  return (
    <Container className="youtube__container">
      <h1>YoTube</h1>
      <h4>HOVER OVER A SKILL FOR MORE INFO</h4>
      <div className="story__container">
        <Welcome />
      </div>
    </Container>
  );
};

export default YouTube;
