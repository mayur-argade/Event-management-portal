import React from 'react';
import ResponsiveDrawer from '../../Components/SideBar/SideBar';
import AddEvent from '../../Components/EventForm/EventForm';
import { Container, Grid } from '@mui/material';
import './createevent.css';

const CreateEvent = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item paddingLeft={{xs:'0px',sm:'240px', md:'240px', lg:'240px'}} lg={12} md={12} sm={12} xs={12} className='add-event' >
        <Container >
          <AddEvent></AddEvent>
        </Container>
      </Grid>
    </Grid>
    </>
  )
}

export default CreateEvent