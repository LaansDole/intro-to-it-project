import React from "react";
import LandingCover from "../landing/LandingCover";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        transform: "translateY(-50px)",
        textAlign: "center",
        '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <LandingCover />
            
            <form 
            className={classes.root} 
            noValidate 
            autoComplete="on">
                <TextField 
                id="outlined-basic" 
                label="username" 
                variant="outlined"
                color="secondary" 
                />
                <TextField 
                id="outlined-basic" 
                label="password"
                type="password" 
                variant="outlined" 
                color="secondary" 
                />
            </form>
        </div>
    )
}
export default LandingPage;