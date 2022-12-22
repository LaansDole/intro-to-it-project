import React, { useState } from "react";
import "./ChatScreen.css";

export default function ChatScrSend() {
    const [input, setInput] = useState();
    const [messages, setMessages] = useState([]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };
    return (
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
    )
}