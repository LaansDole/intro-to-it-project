import React from "react";
import LandingCover from "../landing/LandingCover";
import SignForm from "../landing/SignForm";

const SignUpPage = () => {
    return (
        <div>
            <LandingCover />
            <SignForm 
            link="https://intro-to-it-tinmate.netlify.app/homepage" 
            buttonName="Sign Up"
            />
        </div>
    )
}
export default SignUpPage;