import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
import TinderCardChip from "./TinderChip";
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import TinderBio from "./TinderBio";

import TuanAnh from "../images/TuanAnh.jpg"
import QAnh from "../images/QAnh.jpg"
import Phuoc from "../images/Phuoc.jpg"
import Tony from "../images/AnDo.JPG"

const db = [
  {
    bio:"Hi, my name is Do Le Long An and I am learning to be a Web Developer",
    GPA: "3.7/4.0",
    name: "Long An, SSET",
    url: Tony
  }, 
  {
    bio:"",
    GPA: "4.0/4.0",
    name: "My Phuoc, SBM",
    url: Phuoc
  },
  {
    bio:"",
    GPA: "3.8/4.0",
    name: "Tuan Anh, SSET",
    url: TuanAnh
  },
  {
    bio:"",
    GPA: "3.9/4.0",
    name: "Quynh Anh, SSET", 
    url: QAnh
  },
];

const useStyles = makeStyles((theme) => ({
  info: {
    backdropFilter: "brightness(90%) blur(3px)",
    display: 'flex',
    flexDirection: "column-reverse",
        alignContent: "flex-start",
    flexWrap: 'wrap',
    transform: "translateY(12em)",
    // maxWidth: "250px",
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '@media screen and (max-width: 1200px)': {
      transform: "translateY(10em)",
    },
    '@media screen and (min-height: 1000px)': {
        transform: "translateY(15em)",
    },
    '@media screen and (max-width: 540px) and (max-height: 750px)': {
      transform: "translateY(8em)",
    }
  },
  bioBox: {
    position: "absolute",
    backgroundColor: "white",
    width: "100px",
    borderRadius: "100px",
    boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
    '@media screen and (max-width: 1200px)' : {
      position: 'relative',
      display: "flex",
      }
    },
  clue: {
    marginTop: "-50px",
    position: "absolute",
    textAlign: "center",
    color: "#f50057"
  }
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
        <div className={classes.clue}>
          <h1>Catch your teammate today!</h1>
        </div>
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
                classname={classes.bioBox}
              />
            <div className={classes.info}>
              <TinderCardChip
                  icon={<StarIcon />}
                  label={rmit_er.GPA}
                  color="secondary"
              />
              <h3>{rmit_er.name}</h3>
            </div>
          </div>
          <div className="swipe__direction">
            <p>You have swiped {lastDirection}</p>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
