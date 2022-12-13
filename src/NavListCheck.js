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
                color="primary" 
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
                color="primary"
                />}
                label="CR"
            />
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedDI} 
                onChange={handleChange} 
                name="checkedDI" 
                color="primary"
                />}
                label="DI"
            />
            <FormControlLabel
            control={
                <Checkbox 
                checked={state.checkedHD} 
                onChange={handleChange} 
                name="checkedHD" 
                color="primary"
                />}
                label="HD"
            />
        </FormGroup>
    )
}