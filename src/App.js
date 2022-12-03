import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Chatbox from "./Chatbox";
import ChatScreen from "./ChatScreen";
import UserProfile from "./UserProfile";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen/>
            </Route>
            <Route path="/chat">
              <Header backButton="/homepage" />
              <Chatbox />
            </Route>
            <Route path="/profile">
              <Header frontButton="/homepage" />
              <UserProfile />
            </Route>
            <Route path="/homepage">
              <Header />
              <HomePage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
