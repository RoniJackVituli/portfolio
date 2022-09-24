import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About/About";
import Loading from "./Layout/Loading/Loading";
import Tools from "./components/Tools/Tools";
import Works from "./components/Works/Works";
import YouTube from "./components/YouTube-New/YouTube";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

import Nav from "./Layout/Nav/Nav";

import Footer from "./Layout/Footer/Footer";
import Intro from "./components/Intro/Intro";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      <Intro/>
      <About />
      <Works />
      <YouTube />
      <Tools />
      <Contact />
      <Resume/>
      <Footer />
    </Fragment>
  );

}

export default App;
