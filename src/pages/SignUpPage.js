import React from "react";
import LandingCover from "../landing/LandingCover";
import SignForm from "../landing/SignForm";
import { TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    upload: {
        textAlign: "center",
        transform: "translateY(-90px)",
        paddingBottom: "1vh",
        '& > *': {
        margin: theme.spacing(1.5),
      },
    },
    input: {
        display: 'none',
    },
}));

const SignUpPage = () => {
    const classes = useStyles();
    return (
        <div>
            <LandingCover />
            <div className={classes.upload}>
            <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                multiple
                type="file"
            />
            <label htmlFor="icon-button-file">
                <Tooltip title="Upload Avatar">
                <IconButton color="secondary" aria-label="upload picture" component="span">
                    <PhotoCamera fontSize="large" />
                </IconButton>
                </Tooltip>
            </label>
            </div>
            <SignForm 
            alertMsg='You have successfully signed up!'
            link="/homepage" 
            buttonName="Sign Up"
            children={
                <TextField 
                required
                id="Full Name" 
                name="Full Name" 
                label="Full Name"
                variant="outlined"
                color="secondary"
                type="text"
                placeholder="Do Le Long An"
                />
            }/>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: 'center',
                fontFamily: "Nunito",
                fontWeight: 'bold',
                padding: '20px'
            }}>
                <p>Already have an account? </p>
                <Link href="/signin" 
                style={{paddingTop: "10px"}}
                color="secondary"
                > 
                Sign In</Link>
            </div>
        </div>
    )
}
export default SignUpPage;