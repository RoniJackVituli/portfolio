import React from "react";
import classes from './SectionTitle.module.scss';
type SectionTitleProps = { 
    className?:string;
    title:string;
    subtitle:string;
}

const SectionTitle = ({className, title, subtitle}:SectionTitleProps) => {
  return (
    <div className={className}>
      <h1 className={classes.__title}>{title}</h1>
      <h4 className={classes.__subtitle}>{subtitle}</h4>
    </div>
  );
};

export default SectionTitle;
