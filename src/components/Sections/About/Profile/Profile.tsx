import React from "react";
import classes from './Profile.module.scss';
import roni_profile from "../../../../img/profile_roni.png";


const Profile = () => {

  return (
    <div className={classes.__profile}>
      <img src={roni_profile} alt="profile" />
    </div>
  );
};

export default Profile;
