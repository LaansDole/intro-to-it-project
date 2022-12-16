import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
import TinderCardChip from "./TinderChip";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import GradeIcon from '@material-ui/icons/Grade';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import Hey from './images/Hey.PNG'
import Hi from './images/Hi.png'
import Meme from './images/Meme.png'
import TV from './images/TV.png'

const profileDB = [
    {
        about: 'ReactJS, C++, Python',
        icon: <EmojiEventsIcon />,
        color: 'secondary',
        url: Hey
    },
    {
        about: 'GPA: 3.7/4.0',
        icon: <GradeIcon />,
        color: 'primary',
        url: TV
    },
    {
        about: 'Web Development',
        icon: <LanguageIcon />,
        color: 'secondary',
        url: Hi
    },
    {
        about: 'School: SSET-IT',
        icon: <HomeIcon />,
        color: 'primary',
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
      transform: "translateY(13em)",
      '& > *': {
        margin: theme.spacing(0.5),
      },
      '@media screen and (min-height: 1000px)': {
          transform: "translateY(18em)",
      },
      '@media screen and (max-width: 540px) and (max-height: 750px)': {
        transform: "translateY(12em)",
      }
    },
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
                    label={rmit_er.about}
                    icon={rmit_er.icon}
                    color={rmit_er.color}
                />
            </div>
          </div>
        </TinderCard>
        ))}
        <div className="card__swipe">
            <p>You have swiped {lastDirection} on Tony</p>
        </div>
    </div>
    );
}