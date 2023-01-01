import React from 'react';
import { Formik, Form } from 'formik';
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

const SignForm = () => {
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
        alert("Incorrect password or email");
      }}
    >
      <Form className={classes.root}>
        <TextField 
        required
        id="email" 
        name="email" 
        label="email"
        variant="outlined"
        color="secondary"
        type="email"
        />
        <TextField 
        required
        id="outlined-basic" 
        label="password"
        type="password" 
        variant="outlined" 
        color="secondary" 
        />  
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
    )
};

export default SignForm