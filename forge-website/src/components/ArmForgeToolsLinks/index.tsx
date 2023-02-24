import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const ArmForgeToolsLinks = () => {
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto',mb:2,p:3}}>
      <Typography variant="h5"  sx={{fontWeight:'600'}}>Getting started</Typography>
      <Typography variant="body1" sx={{mt:2,}}>See these topics about Linaro Forge tools.</Typography>
      <Typography component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/ddt/get_started_ddt/index.html' variant="body1" sx={{mt:2,color:'#23b1da',textDecoration:'none'}}>Get started with Linaro DDT</Typography>
      <Typography component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/map/get_started_map/index.html' variant="body1" sx={{color:'#23b1da',textDecoration:'none'}}>Get started with Linaro MAP</Typography>
      <Typography component='a' href='https://docs.linaroforge.com/22.1.3/html/101136_arm-forge-user-guide/performance_reports/getting_started/index.html' variant="body1" sx={{color:'#23b1da',textDecoration:'none'}}>Get started with Linaro Performance Reports</Typography>
    </Grid>
  )
}

export default ArmForgeToolsLinks;