import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import './ReportForm.css';

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(0.5),
      width: '32ch',
    },
  },
  clue: {
    marginLeft: "15px",
    padding: "15px"
  },
  title: {
    backgroundColor: "#f50057",
    color: "white",
  },
  dialog: {
    borderRadius: "30px",
  }
}));

export default function ReportForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="report_form">
      <button
        className="report_button" 
        onClick={handleClickOpen}
        >
        REPORT
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="form-dialog-title" className={classes.title}>
          Report Improper Behavior
        </DialogTitle>
        <Divider />
        <p className={classes.clue}>Is this person bothering you?</p>
        <DialogContent>
          <form className={classes.form}>
            <TextField 
            autoFocus 
            margin="dense" 
            id="outlined"
            label="Report Teammate"
            variant="outlined" 
            fullWidth 
            color="secondary" 
            multiline="true"
            placeholder="This is person is too good to be true" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
