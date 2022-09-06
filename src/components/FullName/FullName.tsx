import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./FullName.scss";

const FullName: React.FC = () => {
  const [firstName, setFirstName] = useState(false);
  const [secondName, setSecondName] = useState(false);
  const [lastName, setLastName] = useState(false);

  return (
    <div
      style={{
        display: "block",
        fontSize: "5em",
        marginRight: `${lastName ? "50px" : "0"}`,
        width: "100%",
      }}
    >
      <div
        className={""}
        onMouseOver={() => {
          setFirstName(true);
        }}
      >
        <span className="letter">R</span>
        {firstName && (
          <Typewriter
            words={["oni "]}
            onLoopDone={() => {
              setSecondName(true);
            }}
          />
        )}
        <span className="letter">J</span>
        {secondName && (
          <Typewriter
            words={["ack "]}
            onLoopDone={() => {
              setLastName(true);
            }}
          />
        )}
        <span className="letter">V</span>
        {lastName && <Typewriter words={["ituli "]} />}
      </div>
    </div>
  );
};

export default FullName;
