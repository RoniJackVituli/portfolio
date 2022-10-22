import React, { useEffect, useState } from "react";
import "./SCSS/Loading.scss";
import loader from "../../img/full-logo.png";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 100 : prevProgress + 10;
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(()=>{
    if(progress === 100){
      setLoading(false);
    }
  },[progress])

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="react-floater-animated">
            <img alt={"logo"} src={loader} />
          </div>
          <div className="start-loader">
            <LinearProgress
              color={"inherit"}
              value={progress}
              variant="determinate"
            />
          </div>
          <div>
            <Typography variant="h2" color="">
              {`${progress}%`}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
