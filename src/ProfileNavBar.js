import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
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
        <BottomNavigationAction  label="About me" icon={<FaceIcon />} />
        <BottomNavigationAction  label="Study" icon={<SchoolIcon />} />
        <BottomNavigationAction  label="Photos" icon={<PhotoLibraryIcon />} />
        </BottomNavigation>
    </div>
  );
}
