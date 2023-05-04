import React from 'react';
import HeroCardName from '../components/HeroCard/HeroCardName/index';
import Grid from '@mui/material/Grid';
import { mapResourceText } from '../hooks/pagesData';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TalkAndContact from '../components/TalkAndContact/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LinaroMapFirstPart from '../components/LinaroMap/LinaroMapFirstPart';

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
          <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 4, mx: { xs: 4, md: 'auto' }, fontWeight: '600' }}>Show Exactly Where and Why Code Is Losing Performance</Typography>
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
                image='/images/MAP_pic.jpg'
                alt="Linaro Map image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: { xs: 0, md: 4 }, mx: { xs: 'auto', md: '0' }, maxWidth: { xs: '100%' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '500' }}>Linaro MAP Resources</Typography>
              <Typography variant="subtitle2" sx={{ display: 'flex', mt: 2, mx: 'auto', ml: 2, p: 2, width: { xs: '90%', s: '100%', md: '60%' } }}>
                {mapResourceText}
              </Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px' }}>
                <ListItem sx={{ display: 'list-item' }}>Help and Tutorials</ListItem>
                <ListItem sx={{ display: 'list-item' }}>HPC Blog</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Linaro Forge</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <TalkAndContact backColor={'#e6e6e6'} />
      </Grid>
      <Footer />

    </ThemeProvider >
  )
}

export default LinaroMap;