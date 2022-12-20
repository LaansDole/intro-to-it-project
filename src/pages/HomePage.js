import React from "react";
import TinderCards from "../tindercard/TinderCards";
import SwipeButtons from "../swipebutton/SwipeButtons";
import NavBar from "../navbar/NavBar";

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