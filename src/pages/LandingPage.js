import React from "react";
import LandingCover from "../landing/LandingCover";
import { Link } from "react-router-dom";
import Carousel from "../landing/Carousel";

function LandingPage() {
    return (
        <div>
            <LandingCover />
            <Carousel />
        </div>
    )
}

export default LandingPage