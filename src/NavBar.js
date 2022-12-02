import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
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
      
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels={false}
        className={classes.root}
        >
        <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction  label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
    </div>
  );
}
