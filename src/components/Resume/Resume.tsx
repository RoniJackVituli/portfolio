import React from "react";
import "./Resume.scss";
import { saveAs } from "file-saver";

const Resume: React.FC = () => {
  const saveFile = () => {
    saveAs("https://docdro.id/YDTpHIl", "rjvCV.pdf");
  };
  return (
    <div className="resume__container" id="resume">
        <button className="buttonResume" onClick={saveFile}>RESUME</button>
    </div>
  );
};

export default Resume;
