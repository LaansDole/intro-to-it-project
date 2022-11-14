import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Tuan Anh"
      message="" 
      timestamp="6 mins ago" 
      profilePic="CHANG-YOUR-PIC.jpg"
      />
      <Chat
      name="Phuoc"
      message="" 
      timestamp="1 hr ago" 
      profilePic="CHANGE-YOUR-PIC.jpg"/>
      <Chat
      name="Phuong Anh"
      message="" 
      timestamp="4 hrs ago" 
      profilePic="CHANGE-YOUR-PIC.jpg"/>
  </div>;
};

export default Chats;
