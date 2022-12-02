import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chatbox from "./Chatbox";
import ChatScreen from "./ChatScreen";
import BottomNavigation from "./BottomNavigation";
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
              <Header backButton="/" />
              <Chatbox />
            </Route>
            <Route path="/">
              <Header />
              <BottomNavigation />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
