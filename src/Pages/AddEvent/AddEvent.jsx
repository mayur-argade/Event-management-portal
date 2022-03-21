import React from 'react'
import {Button, Grid, Container} from '@mui/material'
import '../../Components/AddEvent/AddEvent.css'
import {Link} from 'react-router-dom'
import ResponsiveDrawer from '../../Components/SideBar/SideBar'

const AddEvent = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item paddingLeft={{xs:'0px',sm:'240px', md:'240px', lg:'240px'}} lg={12} md={12} sm={12} xs={12} className='add-event' >
        <Container >
        <div>
    <div className='EventPage'>
      <h1>No Ongoing Events</h1>
      <p>No Events are currently active.</p>
      <p>Start a new Event now!</p>
        <Link to="/newevent">
      <Button variant='contained'>
      Create Event
      </Button>
      </Link>
    
    </div>
    </div>
        </Container>
      </Grid>
    </Grid>
    </>
  )
}

export default AddEvent