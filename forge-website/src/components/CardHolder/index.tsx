import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CardHolder = () => {
  return (
    <Grid container spacing={2}  sx={{mt:{xs:6,md:4},display:'flex',width:'100%',flexDirection:'column',borderRadius:0,borderColor:'white',}}>
   
<Grid container spacing={2} justifyContent="center" sx={{mt:{xs:6,md:8},mx: 'auto',width:'100%',backgroundColor:'white',display:'flex',flexDirection:{md:'row',xs:'column'}}}>
<Grid item xs={6} sx={{padding:'20px 20px',fontSize:'16px'}}>
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
 <Typography variant="h5" noWrap sx={{mt:2,mx: 'auto'}}>Arm MAP Resources</Typography>
 <Typography variant="subtitle2" sx={{mt:2,mx: 'auto'}}>Find resources that describe how to develop, deploy and
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