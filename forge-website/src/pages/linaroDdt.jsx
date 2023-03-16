import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HeroText from '../components/HeroText/index';
import LinaroDdtFeatures from '../components/LinaroDdtFeatures/index';
import TalkAndContact from '../components/TalkAndContact/index';
import LinaroDdtHeroCard from '../components/HeroCard/LinaroDdtHeroCard/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useRouter } from "next/router";
import Footer from '../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const LinaroDdt = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  const router = useRouter();
  return (
    <ThemeProvider theme={formtheme}>
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
      <Grid>
        {/* <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , }}> */}
        {/* <HeaderBar/> */}
        <LinaroDdtHeroCard />
        <Grid sx={{ width: '100%', mt: 2, }}>
          <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 4, mx: 'auto', fontWeight: '600' }}>The Number One Debugger for C, C++ and Fortran Threaded
            and Parallel Code</Typography>
          <Grid container rowSpacing={1} sx={{ flexDirection: { xs: 'column', md: 'row' } }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
              <Box xs='auto' md={4} sx={{
                backgroundColor: 'white', mb: 1, p: 2, mt: 2, width: { xs: '100%', md: '100%' }, pl: { xs: '2', md: '37%' }, display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <Typography variant="subtitle2" sx={{ mb: 2, mt: 2, mx: 'auto' }}>
                  Linaro DDT is the number one server and HPC debugger in
                  research, industry, and academia for software engineers and
                  scientists developing C++, C, Fortran parallel and threaded
                  applications on CPUs, GPUs, Intel and Arm. Linaro DDT is
                  the trusted debugging tool for ensuring program correctness for
                  applications ranging from single process to exascale.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
              <Box xs='auto' md={4} sx={{ backgroundColor: '#e6e6e6', mb: 1, p: 2, mt: 6, width: { xs: '100%', md: '65%', } }}>
                <Typography variant="subtitle2" sx={{ mb: 2, mt: 2, mx: 'auto' }}>Download your free trial of Linaro Forge or contact us
                  for more information.</Typography>
                <Button sx={{ backgroundColor: 'white', borderColor: '#f28630', fontSize: '14px', color: 'black', fontWeight: '600' }} onClick={() => router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
              <Box sx={{ backgroundColor: '#e6e6e6', p: 2, width: { xs: '100%', md: '65%' } }}>
                <Button onClick={() => router.push("/contactUs")} sx={{ backgroundColor: 'white', borderColor: '#9bcc4c', fontSize: '14px', color: 'black', fontWeight: '600' }} variant="outlined">Contact us today</Button></Box>
            </Grid>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0' }, }}>
              <CardMedia
                component="img"
                sx={{ height: 400, mx: { xs: 'auto', md: '0' } }}
                image='/images/DDT_pic.jpg'
                alt="Ddt image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: 4, mx: { xs: 'auto', md: '0' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '600' }}>Linaro DDT Makes
                Debugging Faster</Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px' }}>
                <ListItem sx={{ display: 'list-item' }}>Cross-platform for multiple server and HPC architectures</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Native parallel debugging of Python applications</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Has market leading memory debugging</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Outstanding C++ debugging support</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Complete Fortran debugging support</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Has an offline mode for debugging non-interactively</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Handles and visualizes huge data sets</ListItem>
              </List>
            </Grid>
          </Grid>

          <HeroText />
          <LinaroDdtFeatures />
          <TalkAndContact backColor={'white'} />
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default LinaroDdt;