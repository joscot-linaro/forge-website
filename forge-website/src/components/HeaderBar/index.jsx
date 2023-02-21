import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1,height:'40px' }}>
      <AppBar position="static" sx={{backgroundColor:'#9bcc4c !important',color:'black',}}>
        <Toolbar variant="dense" sx={{display:'flex',justifyContent:'right'}}>
          <Typography component='a' color="inherit"  pr={2} sx={{fontSize:'15px'}} >
          	CodeLinaro |
          </Typography>
          <Typography variant="h6" color="inherit" component="a" pr={2} sx={{fontSize:'15px'}}>
          Linaro Forge |
          </Typography>
          <Typography variant="h6" color="inherit" component="a" sx={{fontSize:'15px'}}>
          Tuxsuite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderBar;