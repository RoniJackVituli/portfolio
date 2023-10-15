import React, { useEffect, useState } from "react";
import YouTube from "./components/Sections/YouTube-New/YouTube";

import { MobileActions } from "./store/mobile-slice";
import { useDispatch, useSelector } from "react-redux";
import ReactGA from "react-ga";
import Welcome from "./components/Sections/Welcome/Welcome";
import { RootState } from "./store";
import Projects from "./components/Sections/Projects/Projects";
import Footer from "./components/Layout/Footer/Footer";
import About from "./components/Sections/About/About";
import Contact from "./components/Sections/Contact/Contact";

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;

ReactGA.initialize(TRACKING_ID!);

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const App = () => {
  //eslint-disable-next-line
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const dispatch = useDispatch();
  const showContent = useSelector((state: RootState) => state.showContent.show);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth < 940) {
      dispatch(MobileActions.isMobile());
    } else {
      dispatch(MobileActions.isDesktop());
    }
    // eslint-disable-next-line
  }, [windowSize]);

  return (
    <>
      <Welcome />
      {showContent && (
        <>
          <About/>
          <Projects/>
          <YouTube />
          <Contact/>
          <Footer/>
        </>
      )}
    </>
  );
};

export default App;
