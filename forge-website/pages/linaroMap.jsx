import React from 'react';
import Navbar from '../src/components/Navbar/index';
import LinaroMap from '../src/components/HeroCard/LinaroMapHeroCard/index';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardHolder from '../src/components/CardHolder/index';

const linaroMap = () => {
  return (
    <div>
      <Navbar />
      <LinaroMap />
       <Grid  sx={{display:'flex',flexDirection:'column',height:300,borderRadius:0,borderColor:'white'}}>
        <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto'}}>Show Exactly Where and Why Code Is Losing Performance</Typography>
    <Grid container spacing={4} justifyContent="center" sx={{mx: 'auto',width:'80%',backgroundColor:'white',display:'flex',flexDirection:"row"}}>
    <Grid item xs={6} sx={{padding:'20px 20px',fontSize:'16px',height:50,p:10}}>
      <ul>
        <li>No need to change your code or the way you build it</li>
        <li>Profiling for applications running on more than one server and multiple processes</li>
        <li>Clear views of bottlenecks in I/O, in compute, in thread or in multi-process activity</li>
        <li>Deep insight into actual processor instruction types that affect your performance</li>
        <li>View memory usage over time to discover high watermarks and changes across the complete memory footprint</li>
      </ul>
      </Grid>
      <Grid sx={{display:'flex',flexDirection:'column',backgroundColor:'white',fontSize:'14px',height:50}} item xs={6}>
     <Box sx={{backgroundColor:'#e6e6e6',mb:1,p:2}}>
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