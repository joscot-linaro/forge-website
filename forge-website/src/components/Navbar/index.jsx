import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";
import CardMedia from '@mui/material/CardMedia';


function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Grid>
      <AppBar position={'fixed'} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '100%', display: 'flex', }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', }}>
          <Toolbar disableGutters sx={{ width: '100%' }}>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                //mr: 40,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: { xs: '60%', md: '100%' },

                }}
                image='/images/Linaro_Forge-white.png'
                alt="Linaro Logo"
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                {/* {pages.map((page) => ( */}
                <MenuItem sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Typography component="a" textAlign="center" href='/about' sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>About</Typography>
                  <Typography component="a" textAlign="center" href='/linaroDdt' sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>Linaro DDT</Typography>
                  <Typography component="a" textAlign="center" href='/linaroMap' sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>Linaro MAP</Typography>
                  <Typography component="a" textAlign="center" href='/linaroPerformanceReports' sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>Linaro Performance Reports</Typography>
                  <Typography component="a" textAlign="center" href='/downloadForge' sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>Download</Typography>
                  <Typography component="a" textAlign="center" href="/documentation" sx={{ textDecoration: 'none!important', color: 'black', fontSize: '12px' }}>Documentation</Typography>

                </MenuItem>

              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'right', mr: 4, } }}>

              <Button
                onClick={() => router.push('/about')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important', }}
              >
                <Typography noWrap underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', mr: 3, '&:hover': { color: '#9bcc4c' } }}>About</Typography>
              </Button>

              <Button
                onClick={() => router.push('/linaroDdt')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important', }}
              >
                <Typography noWrap underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', mr: 3, '&:hover': { color: '#9bcc4c' } }}>Linaro DDT</Typography>
              </Button>
              <Button
                onClick={() => router.push('/linaroMap')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important' }}
              >
                <Typography noWrap underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', mr: 3, '&:hover': { color: '#9bcc4c' } }}>Linaro MAP</Typography>
              </Button>

              <Button
                onClick={() => router.push('/linaroPerformanceReports')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important' }}
              >
                <Typography noWrap underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', mr: 3, '&:hover': { color: '#9bcc4c' } }}>Linaro Performance Reports</Typography>
              </Button>
              <Button

                onClick={() => router.push('/downloadForge')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important' }}
              >
                <Typography underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', mr: 3, '&:hover': { color: '#9bcc4c' } }}>Download</Typography>
              </Button>
              <Button

                onClick={() => router.push('/documentation')}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none!important', fontFamily: '' }}
              >
                <Typography underline='none' component='a' sx={{ textDecoration: 'none!important', color: 'white', fontSize: '12px', '&:hover': { color: '#9bcc4c' } }}>Documentation</Typography>
              </Button>

            </Box>
          </Toolbar>
        </Container>

      </AppBar>
    </Grid>

  );
}
export default ResponsiveAppBar;