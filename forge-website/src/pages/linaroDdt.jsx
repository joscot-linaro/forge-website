import React from 'react';
import Navbar from '../components/Navbar/index';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HeroText from '../components/HeroText/index';
import LinaroDdtFeatures from '../components/LinaroDdtFeatures/index';
import TalkAndContact from '../components/TalkAndContact/index';
import LinaroDdtHeroCard from '../components/HeroCard/LinaroDdtHeroCard/index';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const linaroDdt = () => {
  return (
    <>
    <Navbar/>
    <LinaroDdtHeroCard/>
    <Typography variant="h5" sx={{display:'flex',justifyContent:'center',mb:2,mt:4,mx: 'auto'}}>The Number One Debugger for C, C++ and Fortran Threaded
and Parallel Code</Typography>
    <Box sx={{ width: '100%',mt:2, }}>
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={5} >
            <Typography fontSize={14} variant="body1" pl={4} pr={1}>Linaro DDT is the number one server and HPC debugger in
                research, industry, and academia for software engineers and
                scientists developing C++, C, Fortran parallel and threaded
                applications on CPUs, GPUs, Intel and Arm. Linaro DDT is
                trusted as a powerful tool for automatic detection of memory
                bugs and divergent behavior to achieve lightning-fast
                performance at all scales.
            </Typography>
        </Grid>
        <Grid item xs={7}>
        <Box xs='auto' md={4} sx={{backgroundColor:'#e6e6e6',mb:1,p:2,}}>
        <p>Download your free trial of Linaro Forge or contact us
          for more information.</p>
          <Button sx={{backgroundColor:'white',borderColor:'#f28630',fontSize:'12px'}} onClick={()=>router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
         <Box sx={{backgroundColor:'#e6e6e6',p:2}}>
         <Button onClick={()=>router.push("/contact")} sx={{backgroundColor:'white',borderColor:'#9bcc4c',fontSize:'12px'}} variant="outlined">Contact us today</Button></Box>
        </Grid>
        <Grid item xs={5}>
        <CardMedia
                component="img"
                  sx={{ height:240 }}
                image='/images/DDT_pic.jpg'
                alt="Ddt image"
        />
        </Grid>
        <Grid item xs={7}>  
        <Typography variant="h5" sx={{mb:5,mt:2,mx: 'auto',ml:2}}>Linaro DDT Makes
        Debugging Faster</Typography>
            <ul>
                <li>Cross-platform for multiple server and HPC architectures</li>
                <li>Native parallel debugging of Python applications</li>
                <li>Has market leading memory debugging</li>
                <li>Outstanding C++ debugging support</li>
                <li>Complete Fortran debugging support</li>
                <li>Has an offline mode for debugging non-interactively</li>
                <li>Handles and visualizes huge data sets</li>
            </ul>
        </Grid>
      </Grid>
      <HeroText/>
      <LinaroDdtFeatures/>
      <TalkAndContact backColor={'white'} />
    </Box>
    </>
  )
}

export default linaroDdt;