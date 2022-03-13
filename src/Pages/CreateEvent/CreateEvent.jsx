import React from 'react';
import ResponsiveDrawer from '../../Components/SideBar/SideBar';
import AddEvent from '../../Components/AddEvent/AddEvent';
import { Container, Grid } from '@mui/material';
import './createevent.css';

const CreateEvent = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className='add-event'>
        <Container maxWidth='xl'>
          <AddEvent></AddEvent>
        </Container>
      </Grid>
    </Grid>
    </>
  )
}

export default CreateEvent