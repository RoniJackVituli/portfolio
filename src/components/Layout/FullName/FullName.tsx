import React from "react";
import classes from './FullName.module.scss';
import fullNameLogo from '../../../img/logofullnameletters.jpeg';


const FullName = () => {
  return (
    <div className={classes.__full_name}>
      <img src={fullNameLogo} alt="" />
    </div>
  );
};

export default FullName;
