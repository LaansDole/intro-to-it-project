import React from "react";
import ProfileCard from './ProfileCard'
import TinderBio from '../tindercard/TinderBio'
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import NavBarFilter from "../navbar/NavBarFilter";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import An from '../images/AnDo.JPG'
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    avatar: {
    '@media screen and (max-width: 1200px)' : {
        position: 'relative',
        display: "flex",
        },
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop: "-40px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    },
    name: {
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: 'center',
    },
    divider: {
        padding: "3px",
    },
    profile: {
        fontFamily: "Nunito",
        padding: "0px 20px 40px",
        fontSize: "36px",
        color: "rgba(235, 87, 87, 1)",
    },
    bio: {
        fontStyle: "italic",
        fontSize: "20px",
        color: "#898989",
        textAlign: "center",
        paddingTop: "5px",
    }
  }));

const ProfilePage = () => {
    const classes = useStyles();
    return (
        <div 
        className="profile__navbar"
        style={{
            paddingTop: "3vh",
        }}
        >
            <h1 className={classes.profile}>Profile</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "3vh",
                }}        
            >
                <Avatar 
                alt="Do Le Long An avatar"
                src={An}
                className={classes.avatar}
                />
                <div
                    style={{
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    letterSpacing: "-0.110526px",
                    }}
                >
                    <p className={classes.name}>Do Le Long An</p>
                    <p className={classes.bio}>Hi, Nice to meet you!</p>
                </div>
            </div>
            <Divider className={classes.divider} />
            <ProfileCard />
        </div>
    )
}

export default ProfilePage