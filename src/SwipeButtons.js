import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon style={{ fontSize: 60 }} className="replayIcon"/>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon style={{ fontSize: 60 }} className="closeIcon"/>
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon style={{ fontSize: 60 }} className="favIcon"/>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
