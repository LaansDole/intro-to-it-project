import React from "react";
import LandingCover from "../landing/LandingCover";
import SignForm from "../landing/SignForm";
import { Link } from '@material-ui/core';

const LandingPage = () => {
    return (
        <div>
            <LandingCover />
            <SignForm 
            link="https://intro-to-it-tinmate.netlify.app/"
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
export default LandingPage;