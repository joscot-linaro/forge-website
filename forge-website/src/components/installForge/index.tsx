import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const InstallForge = () => {
  return (
        <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto',p:3}}>
        <Typography variant="h5"  sx={{mt:2,fontWeight:'600'}}>Install</Typography>
        <Typography variant="body1"  sx={{mt:2,}}>See instructions here for installing your Linaro Forge package download:</Typography>
        <Typography variant="body1" component='a'  sx={{mt:2,textDecoration:'none'}} href='https://docs.linaroforge.com/23.0/html/forge/forge/installing/index.html'><span style={{color:'#23b1da',textDecoration:'none !important'}}>How to install Linaro Forge</span></Typography>
        <Typography variant="h6"  sx={{mt:2,}}>Licensing for new and trial users</Typography>
        <Typography variant="body1" sx={{mt:2,}}>You need a license to run these tools. Buy a license or request a trial license today. For more information, see the licensing
        information for Linaro Forge.</Typography>
        <Box>
        <Typography variant="body1"  sx={{mt:2,border:'2px solid #23b1da',p:2,}}>Note: If you have a floating license, you must also download and install Linaro Licence Server.
        If you are trialing the tools with an evaluation license, you do not need to install Linaro License Server.
        For more information about your evaluation license, see <Typography component='a' href="https://docs.linaroforge.com/23.0/html/forge/forge/licensing/workstation_evaluation_licenses.html" sx={{color:'#23b1da',textDecoration:'none !important'}}>how to setup your evaluation license.</Typography></Typography>
        </Box>
        </Grid>
  )
}

export default InstallForge;