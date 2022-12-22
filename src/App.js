import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import ChatBox from "./chat/ChatBox";
import ChatScreen from "./chat/ChatScreen";
import ChatScrSend from "./chat/ChatScrSend";
import ProfilePage from "./profile/ProfilePage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
              <ChatScrSend />
            </Route>
            <Route path="/chat">
              <Header backButton="/homepage" />
              <ChatBox />
            </Route>
            <Route path="/profile">
              <Header frontButton="/homepage" />
              <ProfilePage />
            </Route>
            <Route path="/homepage">
              <Header />
              <HomePage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
