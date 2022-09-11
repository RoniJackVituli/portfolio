import React from "react";
import Title from "../../Layout/Title/Title";
import { ScrollContainer } from "react-scroll-motion";
import CardLeft from "./CardLeft";
import "./YouTube.scss";
import CardRight from "./CardRight";
import youtubeData from "./YouTubeData";
import Welcome from "./Welcome";

const YouTube: React.FC = () => {
  return (
    <ScrollContainer>
      <div className="youtube__container">
        <Title text="YouTube" />
        <div className="story__container">
          <Welcome />
          {youtubeData &&
            youtubeData.map((video, index) => {
              if (index % 2 === 1) {
                return <CardLeft video={video} />;
              }
              return <CardRight video={video} />;
            })}
        </div>
      </div>
    </ScrollContainer>
  );
};

export default YouTube;
