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
         <Typography variant="h5" sx={{display:'flex',justifyContent:'center',mb:2,mt:4,mx: 'auto',fontWeight:'600'}}>Everything you need</Typography>
        <Grid container rowSpacing={1} sx={{flexDirection:{xs:'column',md:'row'}}} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={6} sx={{display:'flex',mx:{xs:'auto'},justifyContent:'center',width:'100%'
        }} >
    <Typography fontSize={14} variant="body1" pl={4} pr={1} sx={{display:'flex',mt:2,mx: 'auto',width:{xs:'100%',md:'60%'}}}>
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
      <Grid item xs={6} sx={{mx:{xs:'auto',md:'0'}}}>
        <Box xs='auto' md={4} sx={{backgroundColor:'#e6e6e6',mb:1,p:3,mt:2,}}>
        <Typography variant="subtitle2" sx={{mb:2,mt:2,mx: 'auto'}}>Download your free trial of Linaro Forge or contact us
          for more information.</Typography>
          <Button sx={{backgroundColor:'white',borderColor:'#f28630',fontSize:'14px',color:'black',fontWeight:'600'}} onClick={()=>router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
         <Box sx={{backgroundColor:'#e6e6e6',p:3}}>
         <Button onClick={()=>router.push("/contactUs")} sx={{backgroundColor:'white',borderColor:'#9bcc4c',fontSize:'14px',color:'black',fontWeight:'600'}} variant="outlined">Contact us today</Button></Box>
        </Grid> 
    
  </Grid>
  </Grid>
  )
}

export default ForgeNeed;