import React from "react";
import "./Header.css";
// import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, useHistory } from "react-router-dom";
import ProfileMenu from "../profile/ProfileMenu";
import TinderIcon from '../images/tinMate_logo.png';
import HeaderChat from "./HeaderChat";

function Header({ backButton, frontButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" color="secondary" />
        </IconButton>
      ) : (
        <ProfileMenu />
      )}
      <Link to="/homepage">
        <img
          className="header__logo"
          src={TinderIcon}
          alt="tinmate logo"
        />
      </Link>
      {frontButton ? (
        <IconButton onClick={() => history.replace(frontButton)}>
          <ArrowForwardIosIcon className="header__icon" fontSize="large" color="secondary" />
        </IconButton>
      ) : (
        <Link to="/chat">
          <HeaderChat />
        </Link>
      )}
    </div>
  );
}

export default Header;
