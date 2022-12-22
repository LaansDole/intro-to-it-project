import React from "react";
import "./ChatScreen.css";
import ReportForm from "../report/ReportForm";

const ChatScreen = () => {
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU TWO WAS MATCHED ON 15/01/2023
      </p>
      <div className="chatScreen__report">
        <ReportForm />
      </div>
    </div>
  );
};

export default ChatScreen;
