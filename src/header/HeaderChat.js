import React from 'react';
import AppTheme from '../AppTheme';
import Badge from '@material-ui/core/Badge';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";

export default function HeaderChat() {
    return (
        <div className="header__icon">
            <AppTheme>
            <IconButton>
                <Badge color="secondary" badgeContent={4} overlap="rectangular">
                    <ForumIcon fontSize="large"/>
                </Badge>
            </IconButton>
            </AppTheme>
        </div>

    )
}