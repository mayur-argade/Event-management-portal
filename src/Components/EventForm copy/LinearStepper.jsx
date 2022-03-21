import { useState } from 'react'
import {Typography,Button, Stepper, Step, StepLabel, Grid, TextField, } from '@mui/material'

function getSteps(){
  return [
    "Basic Info",
    "Objectives",
    "Admin Details"
  ]
}

  
function getStepContent(step){
  switch(step){
    case 0:
      return(
        <>
        <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
            <TextField fullWidth label="Event Title" placeholder="Introduction to AI/ML" InputLabelProps={{shrink: true,}}  variant="standard" ></TextField>
          </Grid>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Description" placeholder="About the Event-" InputLabelProps={{shrink: true,}} multiline rows={3}></TextField>
          </Grid>
          <Grid container direction='row' className='TimePickers'>
            <Grid item className='GridItems'>
              <TextField
                id="datetime-local"
                label="Starting Time"
                type="datetime-local"
                variant='standard'
                defaultValue="2021-03-19T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item className='GridItems'>
              <TextField
                id="datetime-local"
                label="Ending Time"
                type="datetime-local"
                variant='standard'
                defaultValue="2021-03-19T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          </Grid>
          <Grid item className="fileuploadgriditem" lg={6} md={6} sm={12} xs={12}>
            <Typography >Add Event Poster</Typography>
            <Typography>
              file uploader console
            </Typography>
            <p>file uploader log</p>
          </Grid>
          </Grid>
        </>
      )
      case 1:
      return(
        <>
          
        </>
      )
      case 2:
      return(
        <>
          
        </>
      )
      default:
        return "unknown step"

  }
}

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = getSteps();
  const handleNext = () => {
   setActiveStep(activeStep + 1 ) 
  }
  const handleBack = () => {
   setActiveStep(activeStep - 1 ) 
  }

  return (
    <div>
      

{
  activeStep === 4 ? (
    <Typography alignCenter>Thank You</Typography>
  ):
  (
<>
<Stepper activeStep={activeStep}>
{
  steps.map((step, index) => {
    return(
        <Step>
          <StepLabel>{step}</StepLabel>
        </Step>
    )
  })
}
</Stepper>

<form>
 { getStepContent(activeStep) }
</form>

<Button variant="contained" color="secondary" disabled={activeStep === 0} onClick={handleBack} >Back</Button>
      <Button variant="contained" color="primary" onClick={handleNext} >
      {activeStep === 3 ? "Finish" : "Next"}
      </Button>
      </>
  )
}

      

    </div>
  )
}

export default LinearStepper