import React from "react";
import "./ChatBox.css";
import Chat from "./Chat"
import Tony from "./images/Tony.jpg"
import TuanAnh from "./images/TuanAnh.jpg"
import QAnh from "./images/QAnh.jpg"
import Phuoc from "./images/Phuoc.jpg"

const ChatBox = () => {
  return (
  <div className="chatbox">
      <Chat
      name="Tuan Anh"
      message="Nice to meet you" 
      timestamp="6m ago" 
      profilePic={TuanAnh}
      />
      <Chat
      name="Phuoc"
      message="How's the weather?" 
      timestamp="1h ago" 
      profilePic={Phuoc}
      />
      <Chat
      name="Phuong Anh"
      message="Hi" 
      timestamp="4hrs ago" 
      profilePic={QAnh}
      />
      <Chat
      name="Tony"
      message="Are you taking Intro to IT this sem?" 
      timestamp="5s ago" 
      profilePic={Tony}
      />
  </div>
  );
};

export default ChatBox;
