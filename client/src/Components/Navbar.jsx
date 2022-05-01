import {Avatar, AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import mayur from '../asset/profile.png'
import logo from '../asset/logo.png'



const Navbar = () => {
    
  return (
    <div>
      <AppBar   elevation={0} position="fixed" style={{ height: 60, background: "#FFFFFF" }}>
        <Toolbar >
            
            hi this is navbar
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
