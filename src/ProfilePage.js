import React from "react";
import ProfileCard from './ProfileCard'
import TinderBio from './TinderBio'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bio: {
        position: "relative",
    backgroundColor: "#5EECDB",
    width: "180px",
    borderRadius: "30px",
    '@media screen and (max-width: 1200px)' : {
        position: 'relative',
        display: "flex",
        }
    },
  }));

const ProfilePage = () => {
    const classes = useStyles();
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "3vh",
                }}        
            >
                <TinderBio 
                    name='Tony'
                    bio='Hi, my name is Do Le Long An from Intro to IT course, 
                    nice to meet you!'
                    bioTitle="Tony's bio"
                    classname={classes.bio}
                />
            </div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage