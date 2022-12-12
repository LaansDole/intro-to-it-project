import React, { useState } from "react";
import "./ChatScreen.css";
import ReportForm from "./ReportForm";

const ChatScreen = () => {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU TWO WAS MATCHED ON 15/01/2023
      </p>
      <form className="chatScreen__form">
        <input
          className="chatScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__send"
        >
          SEND
        </button>
      </form>
      <div className="chatScreen__report">
        <ReportForm />
      </div>
    </div>
  );
};

export default ChatScreen;
