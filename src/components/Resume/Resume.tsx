import React from "react";
import "./Resume.scss";
import Title from "../../Layout/Title/Title";

import { saveAs } from "file-saver";

const Resume: React.FC = () => {
  const saveFile = () => {
    saveAs(
      "https://docdro.id/hI7VVNy",
      "rjvCV.pdf"
    );
  };
  return (
    <div className="resume__container" id="resume">
      <Title text="Resume" />
      <div className="download">
        <button onClick={saveFile}>download</button>
      </div>
    </div>
  );
};

export default Resume;
