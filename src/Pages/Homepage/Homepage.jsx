import { Grid } from '@mui/material'
import React from 'react'
import ResponsiveDrawer from '../../Components/SideBar/SideBar'

const Homepage = () => {
  return (
    <>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
    </Grid>
    </>
  )
}

export default Homepage