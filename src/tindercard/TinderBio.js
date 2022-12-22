import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { DialogContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import AppTheme from "../AppTheme";

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(5),
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: "x-large",
    },
    bio: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: "large",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    dialog: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    button: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
    },
}));

export default function TinderBio({name, bio, bioTitle, classname}) {
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
            <IconButton color="secondary" onClick={handleClickOpen} className={classes.button}>
                <FingerprintIcon color="secondary" fontSize="small" />
                {bioTitle}
            </IconButton>
            <AppTheme>
                <Dialog fullWidth open={open} onClose={handleClose}>
                    <DialogContent className={classes.dialog}>
                        <IconButton
                        edge="end"
                        color="secondary"
                        onClick={handleClose}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            About: {name}
                        </Typography>
                    </DialogContent>
                    <Divider />
                    <DialogContent>
                        <Typography variant="body1" className={classes.bio}>
                            {bio}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </AppTheme>
        </div>
    )
}