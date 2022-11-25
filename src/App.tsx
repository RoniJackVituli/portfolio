import React, { Fragment, useEffect, useState } from "react";
import "./App.scss";
import Tools from "./components/Tools/Tools";
import YouTube from "./components/YouTube-New/YouTube";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Nav from "./Layout/Nav/Nav";
import Footer from "./Layout/Footer/Footer";
import Loading from "./Layout/Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { MobileActions } from "./store/mobile-slice";
import {useDispatch} from 'react-redux';
import About from "./components/About/About";
import Works from "./components/Works/Works";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const App = () => {
  const [ windowSize, setWindowSize] = useState(getWindowSize());
  const gender = useSelector((state: RootState) => state.gender);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gender.clicked) {
      setTimeout(() => {
        setLoading(true);
      }, 500);
    }
  }, [gender.clicked]);

 
  useEffect(() => {
    if (gender.clicked) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setTimeout(() => {
        setLoading(true);
      }, 5000);
    }
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  useEffect(() => {
    if (windowSize.innerWidth < 940) {
      dispatch(MobileActions.isMobile());
    } else {
      dispatch(MobileActions.isDesktop());
    }
    // eslint-disable-next-line
  }, [windowSize]);


  if (!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Nav />
      <About/>
      <Tools />
      <Works/>
      <YouTube />
      <Contact />
      <Resume />
      <Footer />
    </Fragment>
  );
};

export default App;
