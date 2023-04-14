import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Navbar from '../../Navbar/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const HeroCardName = ({ title_1, title_2 }) => {
  return (
    <Grid sx={{
      display: 'flex', width: '100%', height: '350px', borderRadius: 0, position: 'relative',
      '@media (max-width: 640px)': {
        width: '100%',
        // maxWidth: '1200px'
      }
    }}>
      <Grid sx={{ display: 'flex', width: '100%', height: '350px', borderRadius: 0, position: 'relative', }}>
        <CardMedia
          component="img"
          sx={{
            filter: "brightness(30%)", with: '100%', position: 'relative', '@media (max-width: 640px)': {
              //width: 'auto',
              //maxWidth: '1400px'
            }
          }}
          image='/images/toolchain_72-1-.jpg'
          alt="Live from space album cover"
        />
        <Navbar />
        <Grid
          sx={{
            display: 'flex',
            width: '100%',
            height: '350px',
            borderRadius: 0,
            overflowX: 'hidden',
            position: "absolute",
            color: "white",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            flexDirection: 'column',
            fontSize: '40px',
            '@media (min-width: 600px)': {
              width: 'auto',
              maxWidth: '1000px'
            }
          }}
        >
          <Typography variant="h4" sx={{ color: "white", mx: 'auto', fontWeight: '600' }}>{title_1}</Typography>
          <Typography noWrap align="center" variant="h4" sx={{ color: "#9bcc4c", fontWeight: '400', }}>{title_2}</Typography>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroCardName;
