import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TrialHeroCard from '../../../components/HeroCard/TrialHeroCard/index';

const Thanks = () => {
  return (
   <>
    <TrialHeroCard/>
    <Grid sx={{ display: 'flex',width:'100%' ,height:'350px',borderRadius:0,mx:'auto'}}>
    <Typography fontSize={14} variant="body1" pr={1} sx={{pl:{xs:1,md:4},display:'flex',mx:'auto',mt:4}}>
    Thank you for requesting a trial licence. It has been sent to the email address you have provided.
        </Typography>
    </Grid>
    </>
  )
}

export default Thanks;