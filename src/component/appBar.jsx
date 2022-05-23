import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-scroll";

// const pages = ['Home', 'About', 'Projects','Skills','Contact Me'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
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
    <AppBar position="fixed" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            Mamoro
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
              <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
              <MenuItem  onClick={handleCloseNavMenu}>
              
                    <Typography textAlign="center">Home</Typography>
              </MenuItem>
              </Link>

              <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent="About"
              >
                <Typography textAlign="center">
                  
                  About
                  
                </Typography>
              </MenuItem>
              </Link>
              <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
              <MenuItem
                onClick={handleCloseNavMenu}
              
              >
             
                    <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              </Link>
              <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
              <MenuItem  onClick={handleCloseNavMenu}>
             
                    <Typography textAlign="center">Skills</Typography>
              </MenuItem>
              </Link>

              <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
              <MenuItem onClick={handleCloseNavMenu} >
              
                
                    <Typography textAlign="center">Contact Me</Typography>
              </MenuItem>
              </Link>


              {/* {pages.map((page) => (
                <HashLink to= "#${page}" >
                  <MenuItem key={page} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </HashLink>
              )
              )
              }
                */}
              
            </Menu>
          </Box>
          <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mamoro
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            

          <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
             >
             Home
             </Button>
              </Link>

              <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
             >
             About
             </Button>
              </Link>

              <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
             >
             Projects
             </Button>
              </Link>

              <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
             >
             Skills
             </Button>
              </Link>

              <Link
                    activeClass="active"
                    to="Contact Me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
            >
              <Button
              onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
             >
             Contact Me
             </Button>
              </Link>

            
               
            {/* //    <Button
            //    key={page}
            //    onClick={handleCloseUserMenu}
            //    sx={{ my: 2, color: 'white', display: 'block' }}
            //  >
            //  {page}
            //  </Button> */}
        
                  </Box>
                  

                                                                                                            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
