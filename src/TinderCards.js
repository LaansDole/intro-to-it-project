import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
import TinderCardChip from "./TinderChip";
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

import TuanAnh from "./images/TuanAnh.jpg"
import QAnh from "./images/QAnh.jpg"
import Phuoc from "./images/Phuoc.jpg"
import Tony from "./images/Tony.jpg"

const db = [
  {
    GPA: "3.7",
    YEAR: "Year 2",
    name: "An",
    url: Tony
  }, 
  {
    GPA: "4.0",
    YEAR: "Year 3",
    name: "Phuoc",
    url: Phuoc
  },
  {
    GPA: "3.8",
    YEAR: "Year 1",
    name: "Tuan Anh",
    url: TuanAnh
  },
  {
    GPA: "3.9",
    YEAR: "Year 1",
    name: "Quynh Anh", 
    url: QAnh
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
        alignContent: "flex-start",
    flexWrap: 'wrap',
    transform: "translate(-10px ,10em)",
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function TinderCards() {
  const classes = useStyles();
  const rmit_ers = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction) => {
    setLastDirection(direction);
    console.log(lastDirection);
  }
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {rmit_ers.map((rmit_er) => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            key = {rmit_er.name}
            onSwipe = {(dir) => swiped(dir)}
          >
            <div
              style={{
                backgroundImage : "url(" + rmit_er.url + ")"
              }}
              className="card"
            >
              <div className={classes.root}>
                <TinderCardChip
                    icon={<CheckCircleOutlinedIcon />}
                    label={rmit_er.YEAR}
                    color="secondary"
                />
                <TinderCardChip
                    icon={<GradeOutlinedIcon />}
                    label={rmit_er.GPA}
                    color="primary"
                />
                <h3>{rmit_er.name}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
