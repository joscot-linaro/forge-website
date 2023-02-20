import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";

const ForgeNeed = () => {
  const router = useRouter();
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',mt:2,mb:8}}>
        <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto'}}>Everything you need</Typography>
    <Grid container spacing={2} justifyContent="center" sx={{mx: 'auto',backgroundColor:'white',display:'flex',flexDirection:{xs:'column',md:'row'}}}>
    <Grid item xs={10} md={5}>
    <Typography fontSize={14} variant="body1" pr={1} sx={{pl:{xs:1,md:4}}}>
    Build reliable and optimized code for the right results on
    multiple Server and HPC architectures, from the latest
    compilers and C++ standards to Intel, 64-bit Arm, AMD,
    OpenPOWER and Nvidia GPU hardware. Linaro Forge
    combines Linaro DDT, the leading debugger for time-saving
    high performance application debugging, Linaro MAP, the
    trusted performance profiler for invaluable optimization advice
    across native and Python HPC codes, and Linaro Performance
    Reports for advanced reporting capabilities. Linaro DDT and
    Linaro MAP are also available as standalone products.
    </Typography>
      </Grid>
      <Grid sx={{display:'flex',flexDirection:'column',backgroundColor:'white',fontSize:'18px',}} item xs={10} md={5}>
     <Box sx={{backgroundColor:'#e6e6e6',mb:1,p:2,}}>
        <p>Download your free trial of Linaro Forge or contact us
          for more information.</p>
          <Button sx={{backgroundColor:'white',borderColor:'#f28630',fontSize:'14px',color:'black',fontWeight:'600'}} onClick={()=>router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
     <Box sx={{backgroundColor:'#e6e6e6',p:2}}>
     <Button onClick={()=>router.push("/contactUs")} sx={{backgroundColor:'white',borderColor:'#9bcc4c',fontSize:'14px',color:'black',fontWeight:'600'}} variant="outlined">Contact us today</Button></Box>
      </Grid>
    
  </Grid>
  </Grid>
  )
}

export default ForgeNeed;