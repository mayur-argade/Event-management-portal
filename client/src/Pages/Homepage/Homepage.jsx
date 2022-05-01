import { Grid } from '@mui/material'
import React from 'react'
import HomeCard from '../../Components/HomeCard/HomeCard'
import ResponsiveDrawer from '../../Components/SideBar/SideBar'
import UpcomingEventCard from '../../Components/UpcomingEvent/UpcomingEventCard'

const Homepage = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item lg={10}>
        <HomeCard ></HomeCard>
        <HomeCard ></HomeCard>
        <HomeCard ></HomeCard>
      </Grid>
      <Grid item lg={2}>
        <UpcomingEventCard></UpcomingEventCard>
        <UpcomingEventCard></UpcomingEventCard>
        <UpcomingEventCard></UpcomingEventCard>
      </Grid>
    </Grid>
    </>
  )
}

export default Homepage