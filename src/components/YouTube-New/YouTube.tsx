import React from "react";
import Title from "../../Layout/Title/Title";
import { ScrollContainer } from "react-scroll-motion";

import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Welcome from "./Welcome";
import "./SASS/YouTube.scss";
import youtubeData from "../YouTube-New/YouTubeData";

const YouTube: React.FC = () => {
  return (
    <ScrollContainer>
      <div className="youtube__container">
        <div className="youtube__title" id="youtube">
          <Title text="YouTube" />
        </div>

        <div className="story__container">
          <Welcome />

          {youtubeData && youtubeData.map((video, index) => {
            if(index%2 === 0){
              return <CardTwo video={video} />
            }
            return <CardOne video={video}/>
          })}

        </div>
      </div>
    </ScrollContainer>
  );
};

export default YouTube;
