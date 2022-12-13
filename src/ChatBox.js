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
      message="" 
      timestamp="6 mins ago" 
      profilePic={TuanAnh}
      />
      <Chat
      name="Phuoc"
      message="" 
      timestamp="1 hr ago" 
      profilePic={Phuoc}
      />
      <Chat
      name="Phuong Anh"
      message="" 
      timestamp="4 hrs ago" 
      profilePic={QAnh}
      />
  </div>
  );
};

export default ChatBox;
