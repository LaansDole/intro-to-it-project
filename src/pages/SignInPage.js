import React from "react";
import LandingCover from "../landing/LandingCover";
import SignForm from "../landing/SignForm";
import { Link } from '@material-ui/core';

const SignInPage = () => {
    return (
        <div>
            <LandingCover />
            <SignForm 
            alertMsg='Incorrect password or email'
            link='/signin'
            buttonName="Sign In" 
            />
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: 'center',
                fontFamily: "Nunito",
                fontWeight: 'bold',
                padding: '20px'
            }}>
                <p>Don't have an account? </p>
                <Link href="/signup" 
                style={{paddingTop: "10px"}}
                color="secondary"
                > 
                Sign Up</Link>
            </div>
        </div>
    )
}
export default SignInPage;