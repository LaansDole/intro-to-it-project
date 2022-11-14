import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css"; 
 //We do not use database from firebase but RMIT instead

function TinderCards() {
  return (
    <div>
      <div className="tinderCards__cardContainer">
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              className="card1">
            </div>
          </TinderCard>
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              className="card2">
            </div>
          </TinderCard>
      </div>
    </div>
  );
}

export default TinderCards;
