import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
}));

export default function NavListSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Program and Courses</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">None</MenuItem>
          <ListSubheader>SSET</ListSubheader>
          <MenuItem value={1}>Information Technology</MenuItem>
          <MenuItem value={2}>Software Engineering</MenuItem>
          <ListSubheader>SBM</ListSubheader>
          <MenuItem value={3}>Business</MenuItem>
          <MenuItem value={4}>Digital Marketing</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
