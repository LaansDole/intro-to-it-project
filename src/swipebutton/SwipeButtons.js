import React from "react";
import "./SwipeButtons.css";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { ThumbUp } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import AppTheme from "../AppTheme";

function SwipeButtons() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__dislike">
        <CloseRoundedIcon style={{ fontSize: 60 }} className="closeIcon"/>
      </IconButton>
      <IconButton className="swipeButtons__like" onClick={handleClick}>
        <ThumbUp style={{ fontSize: 60 }} className="favIcon"/>
      </IconButton>
      <AppTheme>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="IT'S A MATCH!"
        />
      </AppTheme>
    </div>
  );
};

export default SwipeButtons;
