import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
import Scene1 from "./images/scene1.png"
import Scene2 from "./images/scene2.png"
import Scene3 from "./images/scene3.png"

const db = [ 
  {
    name: "Phuoc",
    url: Scene1
  },
  {
    name: "Phuong Anh", 
    url: Scene2
  },
  {
    name: "Tuan Anh",
    url: Scene3
  }
];
function TinderCards() {
  const rmit_ers = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction) => {
    setLastDirection(direction);
  }
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {rmit_ers.map((rmit_er) => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            key = {rmit_er.name}
            onSwipe = {(dir) => swiped(dir)}
          >
            <div
              style={{
                backgroundImage : "url(" + rmit_er.url + ")"
              }}
              className="card"
            >
              <h3>{rmit_er.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
