import {Button, Checkbox, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./AddEvent.css"
import PropTypes from 'prop-types';
import { FileUploader } from 'react-drag-drop-files';


const AddEvent = () => {
  const [page, setPage]=useState(0);

 function EventPage() {
   function nextPage() {
     setPage(page=>1);
   }
  return (
    <div className='EventPage'>
      <h1>No Ongoing Events</h1>
      <p>No Events are currently active.</p>
      <p>Start a new Event now!</p>
      <Button variant='outlined' onClick={nextPage}>
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
            <TextField fullWidth label="Event Title" variant='standard'></TextField>
          </Grid>
          <Grid item className='GridItems'>
            <TextField fullWidth  label="Description" multiline rows={3}></TextField>
          </Grid>
          <Grid container direction='row' className='TimePickers'>
            <Grid item className='GridItems'>
              <TextField
                id="datetime-local"
                label="Starting Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
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
                defaultValue="2017-05-24T10:30"
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
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
          </Grid>
          <Grid container lg={6} md={6} sm={12} xs={12} direction='row' className='Buttons'>
            <Grid item >
              <Button variant='contained' color='error' onClick={prevPage}>
              Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={nextPage}>
                Next
              </Button>
            </Grid>
          </Grid>
        
      </Grid>
    </div>
   )
 }


 function AddEventPage2(){
  function prevPage() {
    setPage(page=>1);
  }
  function nextPage() {
    setPage(page=>3);
  }
  const fileTypes = ["JPG", "PNG", "GIF","PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return(
    <div className='AddEvent'>
      <h1>Add Information about the Event</h1>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
            <TextField fullWidth label="Speaker" variant='standard'></TextField>
          </Grid>
          <Grid item className='GridItems'>
            <TextField fullWidth  label="Purpose of the Event" multiline rows={3}></TextField>
          </Grid>
          <Grid item className='GridItems'>
            <TextField fullWidth  label="Topics to be covered in the Event" multiline rows={3}></TextField>
          </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <h1>Add Attachments</h1>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
          </Grid>
          <Grid container lg={6} md={6} sm={12} xs={12} direction='row' className='Buttons'>
            <Grid item >
              <Button variant='contained' color='error' onClick={prevPage}>
              Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={nextPage}>
                Next
              </Button>
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

 function AddEventPage3(){

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  function prevPage() {
    setPage(page=>2);
  }
  const fileTypes = ["JPG", "PNG", "GIF","PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return(
    <div className='AddEvent'>
      <h1>Add Final about the Event</h1>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item className='GridItems'>
            <TextField fullWidth label="Speaker" variant='standard'></TextField>
          </Grid>
          <Grid item className='GridItems'>
            <TextField fullWidth  label="Purpose of the Event" multiline rows={3}></TextField>
          </Grid>
          <Grid item className='GridItems'>
            <TextField fullWidth  label="Topics to be covered in the Event" multiline rows={3}></TextField>
          </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <h1>Add Admin Documents</h1>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
          </Grid>
          
          <Grid container lg={6} md={6} sm={12} xs={12} direction='row' className='Buttons'>
          <Grid item className='Grid Items' lg={12} md={12} sm={12} xs={12}>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Who Can Attend</FormLabel>

                <FormControlLabel value="faculty" control={<Checkbox />} label="Terna Faculty" />
                <FormControlLabel value="students" control={<Checkbox />} label="Terna Students" />
                <FormControlLabel value="others" control={<Checkbox />} label="Others" />
            </FormControl>
          </Grid>
            <Grid item >
              <Button variant='contained' color='error' onClick={prevPage}>
              Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={handleClickOpen}>
                Submit
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </Grid>
          </Grid>
        
      </Grid>
    </div>
   )
 }
return(
  <>
  {page === 0 && <EventPage></EventPage>}
  {page === 1 && <AddEventPage1></AddEventPage1>}
  {page === 2 && <AddEventPage2></AddEventPage2>}
  {page === 3 && <AddEventPage3></AddEventPage3>}

  </>
);
}

export default AddEvent
