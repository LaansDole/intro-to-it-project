import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
import TinderCardChip from "./TinderChip";
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import TinderBio from "./TinderBio";

import TuanAnh from "../images/TuanAnh.jpg"
import QAnh from "../images/QAnh.jpg"
import Phuoc from "../images/Phuoc.jpg"
import Tony from "../images/Tony.jpg"

const db = [
  {
    bio:"Hi, my name is Do Le Long An and I am learning to be a Web Developer",
    GPA: "3.7/4.0",
    YEAR: "Year 2",
    name: "An",
    url: Tony
  }, 
  {
    bio:"",
    GPA: "4.0/4.0",
    YEAR: "Year 3",
    name: "Phuoc",
    url: Phuoc
  },
  {
    bio:"",
    GPA: "3.8/4.0",
    YEAR: "Year 1",
    name: "Tuan Anh",
    url: TuanAnh
  },
  {
    bio:"",
    GPA: "3.9/4.0",
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
    transform: "translate(-10px , 9em)",
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '@media screen and (min-height: 1000px)': {
        transform: "translateY(14em)",
    },
    '@media screen and (max-width: 540px) and (max-height: 750px)': {
      transform: "translateY(7em)",
    }
  },
  container: {
    position: "absolute",
    backgroundColor: "#11071F",
    width: "100px",
    borderRadius: "100px",
    '@media screen and (max-width: 1200px)' : {
      position: 'relative',
      display: "flex",
      }
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
              backgroundImage : "url(" + rmit_er.url + ")",
            }}
            className="card"
          >
            <TinderBio 
                name={rmit_er.name}
                bio={rmit_er.bio}
                bioTitle='Bio'
                classname={classes.container}
              />
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
      <div className="card__swipe">
        <p>You have swiped {lastDirection}</p>
      </div>
    </div>
  );
}

export default TinderCards;
