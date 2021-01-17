import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import RepeatIcon from "@material-ui/icons/Repeat";
import LocalCafe from "@material-ui/icons/LocalCafe";

import styles from "./RoadTimeline.module.css";

const RoadTimeline = ({ colors }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "6px 16px",
      backgroundColor: "rgba(30, 31, 38)",
    },
    secondaryTail: {
      backgroundColor: 303138,
    },
    validated: {
      color: "#4CAF50",
    },
    zoom: {
      transitionDelay: "1000ms",
    },
  }));

  const classes = useStyles();

  const [first, second, third, fourth] = colors;

  return (
    <Zoom className={classes.zoom} in={true}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={first}>
              <LocalCafe />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.timelineCard}>
              <h1 className={styles.timelineTitle}>Variáveis</h1>
              <p className={styles.timelineText}>Você aprendeu variáveis!</p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={second}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.timelineCard}>
              <h1 className={styles.timelineTitle}>Funções</h1>
              <p className={styles.timelineText}>Você aprendeu funções!</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p className={styles.space}> </p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={third}>
              <AssignmentTurnedIn />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.timelineCard}>
              <h1 className={styles.timelineTitle}>Condições</h1>
              <p className={styles.timelineText}>Controles condicionais!</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={fourth}>
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.timelineCard}>
              <h1 className={styles.timelineTitle}>Repetição</h1>
              <p className={styles.timelineText}>Laços de repetição!</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Zoom>
  );
};

export default RoadTimeline;
