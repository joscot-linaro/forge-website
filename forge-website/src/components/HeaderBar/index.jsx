import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1,height:'40px' }}>
      <AppBar position="static" sx={{backgroundColor:'#9bcc4c !important',color:'black',}}>
        <Toolbar variant="dense" sx={{display:'flex',justifyContent:'right'}}>
          <Typography underline='none' variant="h6" color="inherit" component="a" href='https://www.codelinaro.org/' pr={2} sx={{fontSize:'15px',textDecoration:'none'}}>
          CodeLinaro |
          </Typography>
          <Typography underline='none' variant="h6" color="inherit" component="a" href='/' pr={2} sx={{fontSize:'15px',textDecoration:'none'}}>
          Linaro Forge |
          </Typography>
          <Typography underline='none' variant="h6" href='https://tuxsuite.com/' color="inherit" component="a" sx={{fontSize:'15px',textDecoration:'none'}}>
          TuxSuite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderBar;