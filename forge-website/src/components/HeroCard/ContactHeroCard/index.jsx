import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../../Navbar/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ContactHeroCard = () => {
  return (
    <Grid sx={{ display: 'flex',width:'100%' ,height:'350px',borderRadius:0,position:'relative'}}>
      
        <CardMedia
                component="img"
                 sx={{filter:"brightness(30%)",position:'relative' }}
                image='/images/toolchain_72-1-.jpg'
                alt="Live from space album cover"
        />
        <Navbar />
        <Grid sx={{position: "absolute", color: "white",top: 100,left: "50%",transform: "translateX(-50%)",display:'flex',flexDirection:'column',fontSize:'40px'}}> 
        <Typography variant="h4"  sx={{color: "white",mx:'auto',fontWeight:'600'}}>Contact us</Typography>
        </Grid>
       
    </Grid>
  )
}

export default ContactHeroCard;