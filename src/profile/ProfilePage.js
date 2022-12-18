import React from "react";
import ProfileCard from './ProfileCard'
import TinderBio from '../tindercard/TinderBio'
import { makeStyles } from '@material-ui/core/styles';
import NavBarFilter from "../navbar/NavBarFilter";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    bio: {
        position: "relative",
    borderRadius: "30px",
    paddingRight: "10px",
    '@media screen and (max-width: 1200px)' : {
        position: 'relative',
        display: "flex",
        }
    },
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "3vh",
                    transform: "translateX(20px)"
                }}        
            >
                <TinderBio 
                    name='Tony'
                    bio='Hi, my name is (Do Le Long An - s3963207) from Intro to IT course, 
                    nice to meet you! I have passed 9 courses and this is my 4th semesters'
                    bioTitle="Tony's bio"
                    classname={classes.bio}
                />
                <Fab color="secondary" aria-label="edit">                    
                <NavBarFilter 
                        icon={<EditIcon />} 
                        title='Edit Profile'
                    />
                </Fab>
            </div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage