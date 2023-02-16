import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';

const InstallForge = () => {
  return (
        <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
        <Typography variant="h5"  sx={{mt:2,}}>Install</Typography>
        <Typography variant="body1"  sx={{mt:2,}}>See instructions here for installing your Linaro Forge package download:</Typography>
        {/* <Typography variant="body1"  sx={{mt:2,}}><span style={{color:'#23b1da',textDecoration:'none !important'}}>Installing Arm Forge Remote Client on Windows.</span> </Typography> */}
        <Typography variant="body1"  sx={{mt:2,}}><span style={{color:'#23b1da',textDecoration:'none !important'}}><Link style={{textDecoration:'none!important',color:'#23b1da'}} href='https://developer.arm.com/documentation/101136/22-1-3/Arm-Forge/Installing-Arm-Forge'>How to install Arm Forge.</Link></span></Typography>
        <Typography variant="h6"  sx={{mt:2,}}>Licensing for new and trial users</Typography>
        <Typography variant="body1" sx={{mt:2,}}>You need a license to run these tools. Buy a license or request a trial license today. For more information, see the licensing
information for Arm Forge.</Typography>
        <Box>
        <Typography variant="body1"  sx={{mt:2,border:'2px solid #23b1da',p:2,}}>Note: If you have a floating license, you must also download and install Arm Licence Server.
If you are trialing the tools with an evaluation license, you do not need to install Arm License Server.
For more information about your evaluation license, see <span style={{color:'#23b1da',textDecoration:'none !important'}}><Link style={{textDecoration:'none!important',color:'#23b1da'}} href="https://developer.arm.com/documentation/102594/0100/Step-3--Set-up-your-trials-license">how to setup your evaluation license.</Link></span></Typography>
        </Box>
        </Grid>
  )
}

export default InstallForge;