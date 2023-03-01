import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Grid flexGrow={2} sx={{backgroundColor:'#575757',boxSizing:'border-box',m:0,p:0,width:'100%', }}>
             <Typography
            variant="body1"
            noWrap
            
            sx={{
                color:'white',
                p:1,
                display:'flex',
                mx:'auto',
                justifyContent:'center'
            }}
          >
            Copyright © 2023 Linaro Limited
          </Typography> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
              <CardMedia
                component="img"
                image='/images/Linaro_Forge-white.png'
                alt="Linaro Logo"  
                sx={{width:'120px',mt:3, mx:'auto',padding:'10px',
                display:'flex',
                justifyContent:'center',}}  
          />
            </Typography>
          
    </Grid>
  )
}

export default Footer;