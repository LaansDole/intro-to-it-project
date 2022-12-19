import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import DoneAllIcon from "@material-ui/icons/DoneAll";
// import components of the filter
import NavListSlider from "./NavListSlider";
import NavListCheck from "./NavListCheck";
import NavListSelect from "./NavListSelelect";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    color: "white",
    backgroundColor: "#EC5E6F"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "xx-large",
  },
  list: {
    fontFamily: "Times New Roman",
    fontWeight: "bolder",
    fontSize: "x-large",
    color: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  }
}));

export default function NavBarFilter({icon, title}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        {icon}
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                    <DoneAllIcon />
                </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem className={classes.list}>
            No. Passed Courses:
            <NavListSlider />
          </ListItem>
          <Divider />
          <ListItem className={classes.list}>
            Aim and Goal:
            <NavListCheck />
          </ListItem>
          <Divider />
          <ListItem className={classes.list}>
            <NavListSelect />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
