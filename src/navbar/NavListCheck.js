import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
      checkedHD: false,
      checkedDI: false,
      checkedCR: false,
      checkedAny: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
        <FormGroup row>
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedAny} 
                onChange={handleChange} 
                name="checkedAny"
                color="secondary" 
                indeterminate
                />}
                label="Any"
            />
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedCR} 
                onChange={handleChange} 
                name="checkedCR"
                color="secondary"
                />}
                label="CR"
            />
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedDI} 
                onChange={handleChange} 
                name="checkedDI" 
                color="secondary"
                />}
                label="DI"
            />
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedHD} 
                onChange={handleChange} 
                name="checkedHD" 
                color="secondary"
                />}
                label="HD"
            />
        </FormGroup>
    )
}