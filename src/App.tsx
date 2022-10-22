import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import About from "./components/About/About";
import Loading from "./Layout/Loading/Loading";
import Tools from "./components/Tools/Tools";
import Works from "./components/Works/Works";
import YouTube from "./components/YouTube-New/YouTube";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

import Nav from "./Layout/Nav/Nav";
import { ToastContainer } from "react-toastify";
import Footer from "./Layout/Footer/Footer";
import Intro from "./components/Intro/Intro";

function App() {
 
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Loading />,
        document.getElementById("loading-root")!
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Nav />
      <Intro />
      <About />
      <Works />
      <YouTube />
      <Tools />
      <Contact />
      <Resume />
      <Footer />
    </Fragment>
  );
}

export default App;
