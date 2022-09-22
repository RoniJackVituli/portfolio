import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import backgroundImage from './img/intro.jpeg'
import Nav from "./Layout/Nav/Nav";
import About from "./components/About/About";
import Loading from "./Layout/Loading/Loading";
import Tools from "./components/Tools/Tools";
import Works from "./components/Works/Works";
import YouTube from "./components/YouTube-New/YouTube";
import Footer from "./Layout/Footer/Footer";
import Contact from "./components/Contact/Contact";

import Resume from "./components/Resume/Resume";

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
      <div className="intro">
        <img src={backgroundImage} alt="Intro"/>
      </div>
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
