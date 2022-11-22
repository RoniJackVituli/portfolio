import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import Tools from "./components/Tools/Tools";
// import Works from "./components/Works/Works";
import YouTube from "./components/YouTube-New/YouTube";
// import Contact from "./components/Contact/Contact";
// import Resume from "./components/Resume/Resume";

import Nav from "./Layout/Nav/Nav";
import Footer from "./Layout/Footer/Footer";
import Introdction from "./components/Introduction/Introdction";
import Loading from "./Layout/Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "./store";
const App = () => {
  const gender = useSelector((state: RootState) => state.gender);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (gender.clicked) {
      setTimeout(() => {
        setCheck(true);
      }, 500);
    }
  }, [gender.clicked]);

  useEffect(() => {
    if (gender.clicked) {
      setTimeout(() => {
        setCheck(false);
      }, 500);
      setTimeout(() => {
        setCheck(true);
      }, 5000);
    }
  }, [gender.clicked]);

  if (!check) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      <Introdction />
      {/* <Intro />
      <About /> */}
      {/* <Works /> */}
      <Tools />
      <YouTube />
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Footer />
    </Fragment>
  );
};

export default App;
