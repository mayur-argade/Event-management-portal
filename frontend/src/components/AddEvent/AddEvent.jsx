import {Button, Checkbox, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./AddEvent.css"
import PropTypes from 'prop-types';
import { FileUploader } from 'react-drag-drop-files';
import DropFileInput from '../drop-file-input/DropFileInput';


const AddEvent = () => {
  const [page, setPage]=useState(0);

 function EventPage() {
   function nextPage() {
     setPage(()=>1);
   }
  return (
    <div className='EventPage' >
      <div className='text-4xl py-3'>No Ongoing Events</div>
      <div className='text-lg'>No Events are currently active.</div>
      <p className='mb-3'>Start a new Event now!</p>
      <Button variant='contained' onClick={nextPage}>
      Create Event
    </Button>
    </div>
    
)
 }
 function AddEventPage1(){
  function prevPage() {
    setPage(page=>0);
  }
  function nextPage() {
    setPage(page=>2);
  }

  
  const fileTypes = ["JPG", "PNG", "GIF","PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return(
    <div className='AddEvent'>
      <h1>Add New Event</h1>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
            <TextField fullWidth label="Event Title" placeholder="Introduction to AI/ML" InputLabelProps={{shrink: true,}} variant='filled'></TextField>
          </Grid>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Description" placeholder="About the Event-" InputLabelProps={{shrink: true,}} variant='filled' multiline rows={3}></TextField>
          </Grid>
          <Grid container direction='row' className='TimePickers'>
            <Grid item className='GridItems'>
              <TextField
                id="datetime-local"
                label="Starting Time"
                type="datetime-local"
                variant='filled'
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
                variant='filled'
                defaultValue="2021-03-19T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h1>Add Event Poster</h1>
            <DropFileInput
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
          </Grid>
      <h1>Add Information about the Event</h1>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Speaker" placeholder="Mr. Narendra Modi" InputLabelProps={{shrink: true,}} variant='filled'></TextField>
          </Grid>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Purpose of the Event" placeholder="To introduce students to the concepts of AI/ML" InputLabelProps={{shrink: true,}} variant='filled' multiline rows={3}></TextField>
          </Grid>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Topics to be covered" placeholder="Introduction to AI and ML and their modern use cases-" InputLabelProps={{shrink: true,}} variant='filled' multiline rows={3}></TextField>
          </Grid>
          </Grid>
        
      </Grid>

      <h1>Add Final Information about the Event</h1>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Organized by" placeholder="Terna Engineering College, Computer Department" InputLabelProps={{shrink: true,}} variant='filled'></TextField>
          </Grid>
          <Grid item className='GridItems'>
          <TextField fullWidth label="Additional Information" placeholder="Certificates will be provided to the attendees" InputLabelProps={{shrink: true,}} variant='filled' multiline rows={3}></TextField>
          </Grid>
          </Grid>

          
          <Grid container lg={12} md={12} sm={12} xs={12} direction='row' className='Buttons'>
          <Grid item className='Grid Items' lg={12} md={12} sm={12} xs={12}>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Who Can Attend</FormLabel>

                <FormControlLabel value="faculty" control={<Checkbox />} label="Terna Faculty" />
                <FormControlLabel value="students" control={<Checkbox />} label="Terna Students" />
                <FormControlLabel value="others" control={<Checkbox />} label="Others" />
            </FormControl>
          </Grid>
            <Grid item lg={4} md={6} sm={8} xs={12}>
              <Button variant='contained'>
                Submit
              </Button>
            </Grid>
          </Grid>
        
      </Grid>
      </Grid>
    </div>
   )
 }



function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Submitted</DialogTitle>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

  return(
  <>
  {page === 0 && <EventPage></EventPage>}
  {page === 1 && <AddEventPage1></AddEventPage1>}

  </>
);
}

export default AddEvent
