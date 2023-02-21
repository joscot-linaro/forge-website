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
          <Typography variant="h6" color="inherit" component="div" pr={2} sx={{fontSize:'15px'}} >
          	CodeLinaro |
          </Typography>
          <Typography variant="h6" color="inherit" component="div" pr={2} sx={{fontSize:'15px'}}>
          Linaro Forge |
          </Typography>
          <Typography variant="h6" color="inherit" component="div" sx={{fontSize:'15px'}}>
          Tuxsuite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderBar;