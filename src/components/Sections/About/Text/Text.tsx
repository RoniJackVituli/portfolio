import React from "react";
import classes from "./Text.module.scss";

const Text = () => {
  return (
    <div className={classes.__text_container}>
      <h1>Hey!</h1>
      <p>
        I'm a <strong>Full-Stack Web Developer</strong> building the Front-end & Back-end  of Websites and Web
        Applications that leads to the success of the overall product. Check out
        some of my work in the <strong>Projects</strong> section.
      </p>
      <p>
        I also like sharing content related to the stuff that I have learned
        over the years in Web Development so it can help other people of the Dev
        Community. Feel free to Connect or Follow me on my Linkedin where I post
        useful content related to Web Development and Programming
      </p>
      <p>
        I'm open to Job opportunities where I can contribute, learn and grow. If
        you have a good opportunity that matches my skills and experience then
        don't hesitate to contact me.
      </p>
    </div>
  );
};

export default Text;
