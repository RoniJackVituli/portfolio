import React from "react";
import classes from './Wapper.module.scss';

type WapperProps = {
  children:React.ReactNode;
}

const Wapper = ({children}:WapperProps) => {
  return (
    <div className={classes.__wapper}>
      {children}
    </div>
  );
};

export default Wapper;
