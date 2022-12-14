import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { DialogContent } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        color: "aquamarine",
    },
    title: {
        content: {
            fontFamily: "Times New Roman",
            fontWeight: "bold",
        },
        marginLeft: theme.spacing(2),
        flex: 1,
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: "xx-large",
    },
    root: {
        transform: "translate(22em, -80px)",
    }
}));

export default function TinderBio({name, bio}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <IconButton color="secondary" onClick={handleClickOpen}>
                <FingerprintIcon color="secondary" fontSize="large" />
            </IconButton>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {name}'s Bio
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Typography variant="h5" className={classes.content}>
                        {bio} This is a placeholder
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    )
}