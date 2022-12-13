import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
 //We do not use database from firebase but RMIT instead
 import TuanAnh from "./images/TuanAnh.jpg"
 import QAnh from "./images/QAnh.jpg"
 import Phuoc from "./images/Phuoc.jpg"

const db = [ 
  {
    name: "Phuoc",
    url: Phuoc
  },
  {
    name: "Quynh Anh", 
    url: QAnh
  },
  {
    name: "Tuan Anh",
    url: TuanAnh
  }
];
function TinderCards() {
  const rmit_ers = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction) => {
    setLastDirection(direction);
    console.log(lastDirection);
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
              {/* <h3></h3>
              <h3></h3> */}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
