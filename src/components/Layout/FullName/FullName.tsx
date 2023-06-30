import React from "react";
import fullNameLogo from '../../../img/logofullnameletters.jpeg';

type Props = {
  className?:string;
}

const FullName = ({className}:Props) => {
  return (
    <div className={className}>
      <img src={fullNameLogo} alt="" />
    </div>
  );
};

export default FullName;
