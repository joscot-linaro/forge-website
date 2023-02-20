import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const ArmForgeToolsLinks = () => {
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto',mb:2,p:3}}>
      <Typography variant="h5"  sx={{fontWeight:'600'}}>Getting started</Typography>
      <Typography variant="body1" sx={{mt:2,}}>See these topics about Arm Forge tools.</Typography>
      <Typography variant="body1" sx={{mt:2,color:'#23b1da'}}>Get started with Arm DDT</Typography>
      <Typography variant="body1" sx={{color:'#23b1da'}}>Get started with Arm MAP</Typography>
      <Typography variant="body1" sx={{color:'#23b1da'}}>Get started with Arm Performance Reports</Typography>
    </Grid>
  )
}

export default ArmForgeToolsLinks;