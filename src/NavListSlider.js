import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
    paddingTop: "3vw",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function NavListSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={3}
        marks
        min={3}
        max={18}
      />
    </div>
  );
}
