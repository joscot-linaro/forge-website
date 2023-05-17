import React from 'react';
import HeroCardName from '../components/HeroCard/HeroCardName/index';
import Grid from '@mui/material/Grid';
import { LinaroMapContext } from '../hooks/pagesData';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TalkAndContact from '../components/TalkAndContact/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LinaroMapFirstPart from '../components/LinaroMap/LinaroMapFirstPart';
import LinaroMapFeatures from '../components/LinaroMap/LinaroMapFeatures';

const LinaroMap = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });

  return (
    <ThemeProvider theme={formtheme}>
      <CssBaseline />
      <Grid>
        <HeroCardName title_1={'Linaro MAP'} title_2={'Development Tools & Software'} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '100%',
            mt: 2,
            my: '0 auto',
            margin: '0 auto',
            justifyContent: 'center',

          }}>
          <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 4, mx: { xs: 4, md: 'auto' }, fontWeight: '600' }}>Profiling C, C++ and Fortran Threaded and Parallel Code Made Easy</Typography>
          <LinaroMapFirstPart />
          <Grid container
            justify="center"
            alignItems="center"
            rowSpacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              flexDirection: { md: 'row', xs: 'column' },
            }}
            columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Grid item
              xs={6}
              sx={{
                mx: { xs: 'auto', md: '0' },
                maxWidth: { xs: '100%' },


              }}>
              <CardMedia
                component="img"
                sx={{ height: 400, mx: { xs: 'auto', md: '0' }, width: { xs: '100%' }, }}
                image='/images/MAP_page_image.jpg'
                alt="Linaro Map image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: 0, mx: { xs: 'auto', md: '0' }, maxWidth: { xs: '100%' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '600' }}>Linaro MAP Makes Profiling Easy</Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px', width: '80%' }}>
                {LinaroMapContext.map((item) => (
                  <ListItem key={item} sx={{ display: 'list-item' }}>{item}</ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <LinaroMapFeatures />
        <TalkAndContact />
      </Grid>
      <Footer />

    </ThemeProvider >
  )
}

export default LinaroMap;