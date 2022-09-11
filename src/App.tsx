import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import Nav from "./Layout/Nav/Nav";
import About from "./components/About/About";
import Loading from "./Layout/Loading/Loading";
import Tools from "./components/Tools/Tools";
import Works from "./components/Works/Works";
import YouTube from "./components/YouTube-New/YouTube";
// import YouTube from "./components/YouTube/YouTube";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      <div className="intro">
        <div className="background">
        </div>
      </div>
      <About />
      <Tools/>
      <Works/>
      {/* <YouTube/> */}
      <YouTube/>
    </Fragment>
  );
}

export default App;
