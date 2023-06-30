import React from "react";
import classes from "./Project.module.scss";
import { ProjectData } from "../ProjectsData";
import { SiGithub } from "react-icons/si";

type PropjectProps = {
  project: ProjectData;
};

const Project = ({ project }: PropjectProps) => {
  const { description, logo, title, url, github, img } = project;
  return (
    <div className={classes.__project}>
      <div className={classes.__img}>
        <img src={img} alt="" />
      </div>
      <div className={classes.__info_project}>
        <div className={classes.__img}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.__description}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            {url && <a className={classes.__btn} href={url} target={"_blank"} rel="noreferrer"> 
              view project
            </a>}
            {github && (
              <a href={github} className={classes.git}>
                {<SiGithub />}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
