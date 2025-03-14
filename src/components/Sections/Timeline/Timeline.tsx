import React from "react";
import { Box } from "@mui/material";
import Container from "../../Layout/Container/Container";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import Title from "../../Layout/Title/Title";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";

const TimelineRoni = () => {
  return (
    <Container
      id="timeline"
      className="flex h-screen flex-col items-center relative"
    >
      <SectionTitle title="My Timeline" subtitle="see my journey" />

      <Timeline className="flex-1" position="alternate">
        <TimelineItem className="h-full">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            July 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="left"
            variant="body2"
            color="white"
          >
            <Typography variant="h6" component="span">
              Expander
            </Typography>
            <Typography>Full Stack Developer</Typography>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem className="h-full">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            April 2023 - July 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="left"
            variant="body2"
            color="white"
          >
            <Typography variant="h6" component="span" className="w-full">
              Expander
            </Typography>
            <Typography>Software Development Intern</Typography>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem className="h-full">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            Jul 2022 - Jul 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            color="white"
          >
            <Typography variant="h6" component="span" className="w-full">
              SCE
            </Typography>
            <Typography>Teaching Assistant</Typography>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default TimelineRoni;
