import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Group4 from '../images/Tony.jpg'
import Tony from '../images/AnDo.JPG'
import TuanAnh from '../images/TuanAnh.jpg'
import QuynhAnh from '../images/QAnh.jpg'
import Phuoc from '../images/Phuoc.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Group 4 - Intro to IT',
    imgPath:
      Group4
  },
  {
    label: 'Tuan Anh, SSET',
    imgPath:
      TuanAnh
  },
  {
    label: 'Quynh Anh, SSET',
    imgPath:
      QuynhAnh
  },
  {
    label: 'My Phuoc, SBM',
    imgPath:
      Phuoc
  },
  {
    label: 'Long An, SSET',
    imgPath:
      Tony
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white"
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(2),
    backgroundColor: "white",
  },
  img: {
    height: 455,
    display: 'block',
    maxWidth: 700,
    overflow: 'hidden',
    width: '100%',
    objectFit: "cover",
  },
  button: {

  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {tutorialSteps.map((step, index) => (
            <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            style={{backgroundColor: "white"}}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
            </Button>
            }
        />

    </div>
  );
}

export default Carousel;
