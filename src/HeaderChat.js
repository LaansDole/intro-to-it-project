import React from 'react';

import Badge from '@material-ui/core/Badge';
import IconButton from "@material-ui/core/IconButton";
import MailIcon from '@material-ui/icons/Mail';
import "./Header.css";

export default function HeaderChat() {
    return (
        <div>
            <IconButton >
                <Badge className="header__icon" color="secondary" badgeContent={3}S>
                    <MailIcon fontSize="large" />
                </Badge>
            </IconButton>
        </div>

    )
}