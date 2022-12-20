import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../images/tinMate_logo.png"

const useStyles = makeStyles({
    root: {

    },
    logo: {
        objectFit: "cover",
        height: "400px",
        width: "400px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
});

function LandingCover() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <img 
            className={classes.logo}
            src={Logo} 
            alt="Logo" 
            />
        </div>        
    )
}

export default LandingCover