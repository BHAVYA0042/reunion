import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Home from '@mui/icons-material/Home';
import classes from "./newNav.module.css";
import {NavLink} from  "react-router-dom";

const pages = ['Rent', 'Buy', 'Sell','ManageProperty','Resources'];
// const OptionPages=['Manage Property','Resources']
// const settings=['Option 1','Option 2']


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" className={classes.nav} sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.logos}>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Estatery
          </Typography>

          </div>
          
          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
            <NavLink className={(nav)=>nav.isActive ? classes.active : classes.inactive }
            to={`/${page}`}>
              {page}
            </NavLink>
              ))}
            </Menu>
          </Box>

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
              color: 'inhet',
              textDecoration: 'none',
            }}
          >
            Estatery
          </Typography>

          <Box className= {classes.optionBox} sx={{ display: { xs: 'none', sm: 'flex' },color:"black" }}>
          {pages.map((page) => (
            <NavLink className={(nav)=>nav.isActive ? classes.active :""} to={`/${page}`}>
              {page}
            </NavLink>
              ))}
          </Box>
          <Box sx={{marginRight:"0",marginLeft:"auto"}}>
          <button className={classes.loginButton}>Login</button>
          <button className={classes.signupButton}>Sign up</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
