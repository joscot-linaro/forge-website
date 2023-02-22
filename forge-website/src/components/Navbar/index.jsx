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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from "next/router";

const pages = ['Linaro DDT', 'Linaro MAP', 'Documentations'];

function ResponsiveAppBar() {
  const router = useRouter();
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="absolute" sx={{backgroundColor:'rgba(0, 0, 0, 0.5)',}}>
      <Container maxWidth="xl" sx={{fontFamily:'serif',display:'flex',justifyContent:'center'}}>
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 40,
              // display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none!important',
            }}
          >
            Linaro Forge
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:'flex-end' }}>
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
                <MenuItem sx={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                  <Typography component="a" textAlign="center" href='/linaroDdt' sx={{textDecoration:'none!important',color: 'white',fontSize:'12px'}}>Linaro DDT</Typography>
                  <Typography component="a" textAlign="center" href='/linaroMap' sx={{textDecoration:'none!important',color: 'white',fontSize:'12px'}}>Linaro MAP</Typography>
                  <Typography component="a" textAlign="center" href="/documentations" sx={{textDecoration:'none!important',color: 'white',fontSize:'12px'}}>Documentation</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'right',mr:4, } }}>
            
              <Button
                
                onClick={()=>router.push('/linaroDdt')}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none!important' }}
              >
                <Typography underline='none' component='a' sx={{textDecoration:'none!important',color: 'white',fontSize:'12px',mr:3}}>Linaro DDT</Typography>
              </Button>
              <Button
               
                onClick={()=>router.push('/linaroMap')}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none!important' }}
              >
                <Typography underline='none' component='a' style={{textDecoration:'none!important',color: 'white',fontSize:'12px',mr:3}}>Linaro MAP</Typography>
              </Button>
              <Button
               
               onClick={()=>router.push('/downloadForge')}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none!important' }}
              >
                <Typography underline='none' component='a' sx={{textDecoration:'none!important',color: 'white',fontSize:'12px',mr:3}}>Download</Typography>
              </Button>
              <Button
               
               onClick={()=>router.push('/documentation')}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none!important' }}
              >
                <Typography underline='none' component='a' sx={{textDecoration:'none!important',color: 'white',fontSize:'12px'}}>Documentation</Typography>
              </Button>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;