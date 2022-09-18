import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../Layout/Input/Input";
import { FidgetSpinner } from "react-loader-spinner";

import "./SendMe.scss";

const SendMe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<any>(HTMLFormElement);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    
    setTimeout(() => {
      setIsLoading(true);
      emailjs
        .sendForm(
          "ronijackvituli250695",
          "template_9165rjg",
          formRef.current,
          "yJ_dOX9NZqOov_8iv"
        )
        .then((response) => {
          setIsLoading(false);
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILD!!....", err);
        });
    }, 500);
  };

  return (
    <div className="sendme-container">
      {!isLoading && (
        <form ref={formRef} onSubmit={submitHandler}>
          <h1>Send me a message!</h1>
          <div className="name-text">
            <Input
              type="text"
              placeHolder="name"
              id={"name"}
              name={"user_name"}
            />
          </div>
          <div className="email-text">
            <Input
              type="email"
              placeHolder="email"
              id={"email"}
              name={"user_email"}
            />
          </div>
          <div className="subject-text">
            <Input
              type="text"
              placeHolder="subject"
              id={"subject"}
              name={"subject"}
            />
          </div>

          <div>
            <textarea
              className="message"
              placeholder="Message"
              name={"message"}
            />
          </div>
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>
      )}
      {isLoading && (
        <div className="loader">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ballColors={["blue", "blue", "blue"]}
            backgroundColor="white"
          />
          <h3>Sending...</h3>
        </div>
      )}
    </div>
  );
};

export default SendMe;
