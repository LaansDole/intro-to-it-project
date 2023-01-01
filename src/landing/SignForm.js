import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles, TextField } from "@material-ui/core";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        transform: "translateY(-50px)",
        '& > *': {
        margin: theme.spacing(1.5),
      },
    },
}));

const SignForm = ({link, alertMsg, children, buttonName}) => {
    const classes = useStyles();
    return (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);
        alert(`${alertMsg}`)
        window.location.replace(`${link}`);
      }}
    >
        <Form>
            <Grid 
            container 
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            className={classes.root}
            >
            {children}
            <TextField 
            required
            id="email" 
            name="email" 
            label="Email"
            variant="outlined"
            color="secondary"
            type="email"
            />
            <TextField 
            required
            id="outlined-basic" 
            label="Password"
            type="password" 
            variant="outlined" 
            color="secondary" 
            />  
            <button 
            type="submit"
            style={{
                color: "white",
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "25px",
                backgroundColor: "#F50057",
                borderRadius: "30px",
                border: "none",
                padding: "10px"
            }}
            >
                {buttonName}
            </button>
            </Grid>
        </Form>
    </Formik>
  </div>
    )
};

export default SignForm