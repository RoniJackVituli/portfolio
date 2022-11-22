import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../Layout/Input/Input";
import "./SendMe.scss";
// import Loader from "../../Layout/Loader/Loader";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const containsOnlyLetters = (str: string) => {
  return /^[a-z A-Z]*$/.test(str);
};

const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

const SendMe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [fieldsEmpty, setFieldsEmpty] = useState(true);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef<any>(HTMLFormElement);

  useEffect(() => {
    if (
      fields.name.trim() !== "" &&
      fields.email.trim() !== "" &&
      fields.subject.trim() !== "" &&
      fields.message.trim() !== ""
    ) {
      setFieldsEmpty(false);
    }
  }, [fields]);

  const nameHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue: string = event.currentTarget.value;
    if (!containsOnlyLetters(nameValue)) {
      setNameValid(false);
      return;
    }
    setFields({ ...fields, name: nameValue });
    setNameValid(true);
  };

  const emailHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.currentTarget.value;
    if (!isValidEmail(emailValue)) {
      setEmailValid(false);
      return;
    }
    setFields({ ...fields, email: emailValue });
    setEmailValid(true);
  };

  const subjectHandlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const subjectValue = event.currentTarget.value;
    if (subjectValue.trim() === "") {
      setSubjectValid(false);
      return;
    }
    setFields({ ...fields, subject: subjectValue });

    setSubjectValid(true);
  };

  const messageHandlerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const messageValue = event.currentTarget.value;
    if (messageValue.trim() === "") {
      setMessageValid(false);
      return;
    }
    setFields({ ...fields, message: messageValue });
    setMessageValid(true);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setTimeout(() => {
      setIsLoading(true);
      emailjs
        .sendForm(
          "ronijackvituli250695",
          "template_9165rjg",
          formRef.current,
          "NDkm2tmXaqzhq94w0"
        )
        .then((response) => {
          setIsLoading(false);
          toast.success('The Mail Send')
        })
        .catch((err) => {
          toast.error('something worng, please send mail to rjvtechnology@gmail.com');
        });
    }, 500);
  };

  return (
    <div className="sendme-container">
      {!isLoading && (
        <form ref={formRef} onSubmit={submitHandler}>
          <h1>Send me a message!</h1>
          <div className="name-text error">
            <Input
              type="text"
              placeHolder="name"
              id={"name"}
              name={"user_name"}
              onChange={nameHandlerChange}
              className={nameValid ? "" : "error"}
            />
          </div>
          <div className="email-text">
            <Input
              type="email"
              placeHolder="email"
              id={"email"}
              name={"user_email"}
              onChange={emailHandlerChange}
              className={emailValid ? "" : "error"}
            />
          </div>
          <div className="subject-text">
            <Input
              type="text"
              placeHolder="subject"
              id={"subject"}
              name={"subject"}
              onChange={subjectHandlerChange}
              className={subjectValid ? "" : "error"}
            />
          </div>

          <div>
            <textarea
              className={`message ${messageValid ? "" : "error"}`}
              placeholder="Message"
              name={"message"}
              onChange={messageHandlerChange}
            />
          </div>
          <div className="btn">
            <button
              type="submit"
              className={
                emailValid &&
                nameValid &&
                messageValid &&
                subjectValid &&
                !fieldsEmpty
                  ? ""
                  : "disabled"
              }
              disabled={
                emailValid &&
                nameValid &&
                messageValid &&
                subjectValid &&
                !fieldsEmpty
                  ? false
                  : true
              }
            >
              Send
            </button>
          </div>
        </form>
      )}
      {isLoading && (
        <div className="divloader">
          {/* <Loader /> */}
        </div>
      )}
    </div>
  );
};

export default SendMe;
