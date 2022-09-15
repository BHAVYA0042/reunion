import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import {MenuOutlined} from '@mui/icons-material';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom"
import classes from "./newNav.module.css";
import Home from '@mui/icons-material/Home';


const pages = ['Rent', 'Buy', 'Sell','ManageProperty','Resources'];


const ResponsiveAppBarr = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
        <Home sx={{color:"#8758FF",position:"relative",bottom:"1px"}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Estatery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <NavLink className={(nav)=>nav.isActive ? classes.activeMobile : classes.inactiveMobile} 
                to={`/${page}`}>
              {page}
            </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <Home sx={{color:"#8758FF",position:"relative",bottom:"1px"}}/> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              paddingRight:"80px"
            }}
          >
            Estatery
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:{ xs:'none', md: 'flex-start'}, paddingRight:"80px" }}>
            {pages.map((page) => (             
            <NavLink className={(nav)=>nav.isActive ? classes.active : classes.inactive} to={`/${page}`}>
              {page}
            </NavLink>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0}} className={classes.buttonBox}>
          <button className={classes.loginButton}>Login</button>
          <button className={classes.signupButton}>Sign up</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBarr;

