import React, { useState } from 'react'
import ResponsiveDrawer from '../../components/SideBar/SideBar'
import DropFileInput from '../../components/drop-file-input/DropFileInput';
import {Button, Checkbox, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, TextField } from '@mui/material'
import './eventpage.css'

const EventPage = () => {
  const [About, setAbout] = useState(true);
  const [Gallery, setGallery] = useState(false);
  const [Admin, setAdmin] = useState(false);

  function AboutPage() {
    return(
      <>
        <div>Information About the Event</div>
      </>
    )
  }

  function GalleryPage() {
    return(
      <>
        <div>
        <section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"></img>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </>
    )
  }

  function AdminPage() {


      /*
          // You will have to fetch the current data for this page. 

      */


    const fileTypes = ["JPG", "PNG", "GIF","PDF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
    return(
      <>
        <div className='text-2xl'>Edit Information About the Event</div>
        
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
      </>
    )
  }
  return (
    <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <ResponsiveDrawer></ResponsiveDrawer>
    </Grid>
    <Grid item lg={12} style={{height:'100vmax'}}>
    <div className='xs:ml-0 sm:ml-72 mx-5'>
        <div className='h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>
          
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className='py-20 pl-24 '>
                  <p className='text-4xl text-white pb-4'>Event Title</p>
                  <p className='text-xl text-white'>Organized By: CSI Terna</p>
                  <p className='text-xl text-white'>30 February 2022</p>
                  <p className='text-xl text-white'>24:01 am</p>

                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div class="flex flex-wrap w-3/4 pt-6">
                    <img alt="gallery" class="block object-cover object-center w-full h-60 rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></img>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>


        <div className='grid grid-cols-12 gap-5 py-5 xs:ml-0 sm:ml-72'>
        <div className='lg:col-start-1 lg:col-end- col-start-1 col-end-13'>
        <div class="tabs tabs-boxed bg-slate-200">
          <a className={`${About ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setAbout(true);setGallery(false);setAdmin(false)}}>About</a> 
          <a className={`${Gallery ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setAbout(false);setGallery(true);setAdmin(false)}}>Gallery</a> 
          <a className={`${Admin ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setAbout(false);setGallery(false);setAdmin(true)}}>Admin</a>
        </div>
        <div className='m-10'>
          {About===true && <AboutPage></AboutPage>}
          {Gallery===true && <GalleryPage></GalleryPage>}
          {Admin===true && <AdminPage></AdminPage>}
        </div>
        </div>

      </div>
    </Grid>
  </Grid>
  )
}

export default EventPage