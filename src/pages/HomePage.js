import React from "react";
import TinderCards from "../tindercard/TinderCards";
import SwipeButtons from "../swipebutton/SwipeButtons";
import NavBar from "../navbar/NavBar";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <div className="tindercardpage">
            <TinderCards />
            <SwipeButtons />
            </div>
        </div>
    )
}
 export default HomePage