import React from 'react';
import Navbar from '../components/Navbar/index';
import LinaroMap from '../components/HeroCard/LinaroMapHeroCard/index';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardHolder from '../components/CardHolder/index';

const linaroMap = () => {
  return (
    <div>
      <Navbar />
      <LinaroMap />
       <Grid container spacing={2}  sx={{display:'flex',width:'100%',flexDirection:'column',borderRadius:0,borderColor:'white',}}>
        <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto'}}>Show Exactly Where and Why Code Is Losing Performance</Typography>
    <Grid container spacing={2} justifyContent="center" sx={{p:6,mx: 'auto',width:'100%',backgroundColor:'white',display:'flex',flexDirection:{sm:'row',md:'row',xs:'column'},}}>
    <Grid item xs='auto' md={4} sx={{fontSize:'15px',width:{xs:'100%',md:'70%'},}}>
      <ul>
        <li>No need to change your code or the way you build it</li>
        <li>Profiling for applications running on more than one server and multiple processes</li>
        <li>Clear views of bottlenecks in I/O, in compute, in thread or in multi-process activity</li>
        <li>Deep insight into actual processor instruction types that affect your performance</li>
        <li>View memory usage over time to discover high watermarks and changes across the complete memory footprint</li>
      </ul>
      </Grid>
      <Grid sx={{display:'flex',flexDirection:'column',backgroundColor:'white',fontSize:'14px',width:'100%',}} item xs={6}>
     <Box xs='auto' md={4} sx={{backgroundColor:'#e6e6e6',mb:1,p:2,}}>
        <p>Download your free trial of Linaro Forge or contact us
          for more information.</p>
          <Button sx={{backgroundColor:'white',borderColor:'#f28630',fontSize:'12px'}} onClick={()=>router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
     <Box sx={{backgroundColor:'#e6e6e6',p:2}}>
     <Button onClick={()=>router.push("/contact")} sx={{backgroundColor:'white',borderColor:'#9bcc4c',fontSize:'12px'}} variant="outlined">Contact us today</Button></Box>
      </Grid>
    
  </Grid>
  </Grid>
  <CardHolder />
    </div>
  )
}

export default linaroMap;