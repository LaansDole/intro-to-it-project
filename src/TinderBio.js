import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { DialogContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import AppTheme from "./AppTheme";

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
        marginLeft: theme.spacing(5),
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: "x-large",
    },
    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: 'center',
    }
}));

export default function TinderBio({name, bio, classname}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classname}>
            <IconButton color="secondary" onClick={handleClickOpen}>
                <FingerprintIcon color="secondary" fontSize="large" />
            </IconButton>
            <AppTheme>
                <Dialog fullWidth open={open} onClose={handleClose}>
                    <DialogContent className={classes.root}>
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
                    </DialogContent>
                    <Divider />
                    <DialogContent>
                        <Typography variant="h5" className={classes.content}>
                            {bio}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </AppTheme>
        </div>
    )
}