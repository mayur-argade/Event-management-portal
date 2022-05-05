import * as React from 'react';
import {useContext} from 'react'
import {AppBar, Toolbar, InputBase, Avatar, IconButton, Drawer, CssBaseline, Box, Typography, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Grid  } from '@mui/material'
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import './SideBar.css';
import { makeStyles } from "@mui/styles";
import {minWidth } from '@mui/system';
import { Navigate, NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import mayur from '../../assets/profile.png'
import { Context } from '../../context/Context';

const drawerWidth = '240px';

const useStyles = makeStyles((theme) => ({
  search: {  
    display: "flex",
    height: 35,
    alignItems: "center",
    backgroundColor: "#cfd8dc",
    "&:hover": {
      backgroundColor: "#cfd8dc",
    },
    borderRadius: 8,
    marginRight: theme.spacing(3),
    marginLeft: 0, 
},
profile:{
  display: "flex",
  alignItems: "center",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
      display: "none",
  }
},
}));

function ResponsiveDrawer(props)
 {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <>
  <div className='Drawer'>  
    <Toolbar className="SideBarItem">
    <img className="logo" src={logo} alt="logo" />
    <Typography variant="h6" color="#000000">EventTick</Typography>
    </Toolbar>
    <List >
          <NavLink to="/" className='Navlink' style={{ textDecoration: 'none' }}>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Homepage</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>

          
          <Link to={{ pathname: "http://localhost:4000/signuptest" }} target="_blank"  style={{ textDecoration: 'none' }}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Add Event</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>

          <NavLink to="/event" className='Navlink' style={{ textDecoration: 'none' }}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4h16zm0 2H4v8h16v-8zM6 13h5v4H6v-4z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >Event Page(Temp)</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to="/signin" className='Navlink' style={{ textDecoration: 'none' }}>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"/></svg>
              </ListItemIcon>
              <ListItemText  ><Typography >SignIn(Temp)</Typography></ListItemText>
            </ListItemButton>
          </ListItem>
          </NavLink>

          </List>
  </div>
  </>
 
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const {user } = useContext(Context);
  console.log(user);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} color= 'inherit' position="sticky">
        <Toolbar className="toolbar">
        
        <div className="left">    
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} >
          <MenuIcon />
        </IconButton>    
        <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="right">
        <div className={classes.search}>
        <svg style={{padding: 5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
                    <InputBase placeholder="search..." />
                </div>
                <div className={classes.profile}>
                <Avatar style={{marginRight: 6}} alt="profile-photo" src={mayur} />
                <Typography className={classes.username} color="#000000"  >Welcome <br/>{user.user.name}</Typography>
                </div>
            </div>
        

        </Toolbar>
      </AppBar>
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
