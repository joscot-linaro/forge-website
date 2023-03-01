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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CssBaseline />
      <ContactHeroCard />
      <Grid sx={{ display: 'flex', width: '100%', borderRadius: 0, mx: 'auto', borderColor: 'white' }}>
        <Typography fontSize={14} variant="body1" pr={1} sx={{ pl: { xs: 1, md: 4 }, display: 'flex', mx: 'auto', mt: 4 }}>
          Thank you for your interest. A member of the sales team will contact you in due course.
        </Typography>
      </Grid>
    </>
  )
}
export default Thanks;