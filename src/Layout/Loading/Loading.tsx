import React, { useEffect, useState } from "react";
import "./SCSS/Loading.scss";
import loader from "../../img/full-logo.png";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress >= 100 ? 0 : prevProgress + 10;
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
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
        <Typography variant="h2" color="">{`${progress}%`}
        </Typography>
      </div>
    </div>
  );
};

export default Loading;
