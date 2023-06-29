import React from "react";
import classes from "./SidesNav.module.scss";
import SocialNav from "./SocialNav/SocialNav";
import EmailNav from "./EmailNav/EmailNav";

const SidesNav: React.FC = () => {

  return (
    <>
      <SocialNav className={classes.sidenavright}/>
      <EmailNav  className={classes.sidenavleft}/>
    </>
  );
};

export default SidesNav;
