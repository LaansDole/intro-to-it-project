import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import ChatBox from "./ChatBox";
import ChatScreen from "./ChatScreen";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen/>
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
