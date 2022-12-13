import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SchoolIcon from '@material-ui/icons/School';
import NavBarFilter from './NavBarFilter'
import AppTheme from './AppTheme';
import "./NavBar.css"

const useStyles = makeStyles({
  root: {
    width: 1500,
  },
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
        showLabels={false}
        className={classes.root}
        >
        <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction  label="Same School" icon={<SchoolIcon />} />
        <BottomNavigationAction  label="More" icon={<NavBarFilter />} />
        </BottomNavigation>
      </AppTheme>
    </div>
  );
}
