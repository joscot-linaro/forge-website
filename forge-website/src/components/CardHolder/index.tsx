import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CardHolder = () => {
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',height:300,borderRadius:0,borderColor:'white',}}>
   
<Grid container spacing={4} justifyContent="center" sx={{mx: 'auto',width:'80%',backgroundColor:'white',display:'flex',flexDirection:"row"}}>
<Grid item xs={6} sx={{padding:'20px 20px',fontSize:'16px',height:50,p:10}}>
<CardMedia
                component="img"
                //  sx={{filter:"brightness(30%)" }}
                image='/images/MAP_pic.jpg'
                alt="Live from space album cover"
        />
  </Grid>
  <Grid sx={{display:'flex',flexDirection:'column',backgroundColor:'white',fontSize:'14px',height:50}} item xs={6}>
 <Box sx={{mb:1,p:2}}>
 <Grid  sx={{display:'flex',flexDirection:'column',height:300,borderRadius:0,borderColor:'white'}}>
 <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto'}}>Arm MAP Resources</Typography>
 <Typography variant="subtitle2" sx={{mb:5,mt:2,mx: 'auto'}}>Find resources that describe how to develop, deploy and
optimize enterprise and scientific HPC (High Performance
Computing) applications, including:</Typography>
<ul>
    <li>Help and Tutorials</li>
    <li>HPC Blog</li>
    <li>Arm Forge</li>
</ul>
</Grid>
 </Box>
  </Grid>

</Grid>
</Grid>
  )
}

export default CardHolder;