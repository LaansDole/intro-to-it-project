import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "../tindercard/TinderCards.css";
 //We do not use database from firebase but RMIT instead
import TinderCardChip from "../tindercard/TinderChip";
import { makeStyles } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';
import GradeIcon from '@material-ui/icons/Grade';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import Hey from '../images/Hey.PNG'
import Hi from '../images/Hi.png'
import Meme from '../images/Meme.png'
import Tony from '../images/Tony.jpg'

const profileDB = [
    {
        about: 'Skills: ReactJS, JSS',
        icon: <EmojiEventsIcon />,
        color: 'secondary',
        url: Hey
    },
    {
        about: 'GPA: 3.7/4.0',
        icon: <GradeIcon />,
        color: 'secondary',
        url: Tony
    },
    {
        about: 'Aim: Web Development',
        icon: <LanguageIcon />,
        color: 'secondary',
        url: Hi
    },
    {
        about: 'Program: SSET - IT',
        icon: <SchoolIcon />,
        color: 'secondary',
        url: Meme
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "flex-start",
      flexWrap: 'wrap',
      transform: "translateY(15em)", // for normal screen
      maxWidth: "240px",
      '@media screen and (max-width: 1200px) and (orientation: landscape)': {
        transform: "translateY(14em)",
      },
      '@media screen and (max-height: 700px) and (orientation: landscape)': {
        transform: "translateY(11em)",
      },
      '@media screen and (max-width: 400px) and (max-height: 750px)': {
        transform: "translateY(14em)",
      }
    },
    swiped: {
      fontWeight: "bold",
      position: "relative",
      textAlign: "center",
      color: "#f50057",
      marginTop: "-60px",
      paddingBottom: "20px"
    }
  }));

export default function ProfileCard() {
    const classes = useStyles();
    const profile = profileDB;
    const [lastDirection, setLastDirection] = useState();

  const swiped = (direction) => {
    setLastDirection(direction);
    console.log(lastDirection);
    }
    return (
    <div className="tinderCards__cardContainer">
        <div className={classes.swiped}>
          <p>You swipe {lastDirection} on Tony</p>
        </div>
        {profile.map((rmit_er) => (
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
                <div className={classes.root}>
                <TinderCardChip
                    size="large"
                    label={rmit_er.about}
                    icon={rmit_er.icon}
                    color={rmit_er.color}
                />
            </div>
          </div>
        </TinderCard>
        ))}
    </div>
    );
}