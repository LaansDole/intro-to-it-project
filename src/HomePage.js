import React from "react";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import NavBar from "./NavBar";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <TinderCards />
            <SwipeButtons />
        </div>
    )
}
 export default HomePage