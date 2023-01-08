import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import ChatBox from "./chat/ChatBox";
import ChatScreen from "./chat/ChatScreen";
import ChatScrSend from "./chat/ChatScrSend";
import ProfilePage from "./profile/ProfilePage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./App.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    fontWeight: "bold",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-evenly'
  },
}));

function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-height:600px)');

  return (
    <div className="App">
      <Backdrop className={classes.backdrop} open={matches}>
        <p>The app does not support this view, please change back to potrait</p>
        <CircularProgress color="inherit" />
      </Backdrop>
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
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/">
              <SignInPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
