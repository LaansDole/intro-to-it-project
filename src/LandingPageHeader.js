import React from "react";
import { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import TinderIcon from './images/tinMate_logo.png';

export default function LandingPageHeader() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className="landing_header">
            <img 
                className="header_logo"
                src={TinderIcon}
                alt="tinmate logo"
            />
            
        </div>
    )
} 