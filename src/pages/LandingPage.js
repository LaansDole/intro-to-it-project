import React from "react";
import LandingCover from "../landing/LandingCover";
import Carousel from "../landing/Carousel";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from '@material-ui/core';

function LandingPage() {
    return (
        <div>
            <LandingCover />
            <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    fontFamily: "Century gothic",
                    fontWeight: 'bold',
                    paddingBottom: '10px',
                    fontSize: "45px",
                    transform: 'translateY(-100%)',
                    color: '#F50057'
                }}>
                    for a better TEAMMATE
                </div>
            <Carousel />
            <Button
                variant="outlined"
                color="secondary"
                size="medium"
                style={{
                    marginTop: "30px",
                    marginBottom: "20px",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    borderRadius: "30px",
                }}   
            >
                <Link 
                href="/signin"
                underline="none"
                color="secondary"
                >
                Getting Started</Link>
            </Button>
        </div>
    )
}

export default LandingPage