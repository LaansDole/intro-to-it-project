import React from "react";
import "./SwipeButtons.css";

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
      <IconButton className="swipeButtons__like" onClick={handleClick}>
        <FavoriteIcon style={{ fontSize: 60 }} className="favIcon"/>
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
      <IconButton className="swipeButtons__dislike">
        <CloseIcon style={{ fontSize: 60 }} className="closeIcon"/>
      </IconButton>
      
    </div>
  );
};

export default SwipeButtons;
