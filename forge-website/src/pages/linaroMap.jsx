import React from 'react';
import HeroCardName from '../components/HeroCard/HeroCardName/index';
import Grid from '@mui/material/Grid';
import { forgePerformanceItems, mapResourceText } from '../hooks/pagesData';
import Box from '@mui/material/Box';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TalkAndContact from '../components/TalkAndContact/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useRouter } from "next/router";
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DownloadContainer from '../components/DownloadContainer/index';

const LinaroMap = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  const router = useRouter();
  return (
    <ThemeProvider theme={formtheme}>
      <CssBaseline />
      <Grid>
        <HeroCardName title_1={'Linaro MAP'} title_2={'Development Tools & Software'} />
        <Grid sx={{ width: '100%', mt: 2, minHeight: { md: '70.5vh', xs: '100vh' } }}>
          <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 4, mx: 'auto', fontWeight: '600' }}>Show Exactly Where and Why Code Is Losing Performance</Typography>
          <Grid container rowSpacing={1} sx={{ mx: 'auto', flexDirection: { xs: 'column', md: 'row' } }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
              <Box xs='auto' md={4} sx={{
                backgroundColor: 'white', mb: 0, p: 2, mt: 2, width: { xs: '100%', md: '100%' }, pl: { xs: '0', md: '10%' }, display: 'flex',
                justifyContent: 'flex-end'
              }}>

                <List sx={{ listStyleType: 'disc', pl: { xs: 0, md: 25 }, width: { xs: '100%', md: '100%', fontSize: '14px' } }}>
                  {forgePerformanceItems.map((item) => (
                    <ListItem key={item} sx={{ display: 'list-item', mb: -1 }}>{item}</ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <DownloadContainer />
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0' }, }}>
              <CardMedia
                component="img"
                sx={{ height: 400, mx: { xs: 'auto', md: '0' } }}
                image='/images/MAP_pic.jpg'
                alt="Linaro Map image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: 4, mx: { xs: 'auto', md: '0' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '500' }}>Linaro MAP Resources</Typography>
              <Typography variant="subtitle2" sx={{ display: 'flex', mt: 2, mx: 'auto', ml: 2, p: 2, width: '60%' }}>
                {mapResourceText}
              </Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px' }}>
                <ListItem sx={{ display: 'list-item' }}>Help and Tutorials</ListItem>
                <ListItem sx={{ display: 'list-item' }}>HPC Blog</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Linaro Forge</ListItem>
              </List>
            </Grid>
          </Grid>
          <TalkAndContact backColor={'#e6e6e6'} />
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default LinaroMap;