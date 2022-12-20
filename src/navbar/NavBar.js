import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import NavBarFilter from './NavBarFilter'
import AppTheme from '../AppTheme';
import TuneIcon from "@material-ui/icons/Tune";

import "./NavBar.css"

const useStyles = makeStyles({
  root: {
    width: 1500,
    backgroundColor: "#F3F3F3",
  },
  label: {
    color: "#ADAFBB",
  }
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="navbar">
      <AppTheme>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon />} className={classes.label} />
        <BottomNavigationAction  label="Same School" icon={<SchoolIcon />} className={classes.label} />
        <BottomNavigationAction  label="More" icon={<NavBarFilter icon={<TuneIcon />} title='Filter' />} className={classes.label} />
        </BottomNavigation>
      </AppTheme>
    </div>
  );
}
