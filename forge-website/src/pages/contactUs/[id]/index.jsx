import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactHeroCard from '../../../components/HeroCard/ContactHeroCard/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

const Thanks = () => {
  return (
    <>
       <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
    <ContactHeroCard/>
    <Grid sx={{ display: 'flex',width:'100%' ,borderRadius:0,mx:'auto',borderColor:'white'}}>
    <Typography fontSize={14} variant="body1" pr={1} sx={{pl:{xs:1,md:4},display:'flex',mx:'auto',mt:4}}>
    Thank you for your interest. A member of the sales team will contact you in due course.
        </Typography>
    </Grid>
   </>
  )
}
export default Thanks;