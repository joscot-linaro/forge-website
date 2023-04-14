import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import HeroText from '../components/HeroText/index';
import LinaroDdtFeatures from '../components/LinaroDdtFeatures/index';
import TalkAndContact from '../components/TalkAndContact/index';
import HeroCardName from '../components/HeroCard/HeroCardName/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from '../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import DownloadContainer from '../components/DownloadContainer/index';
import { linaroDdtText, ddtFeatures } from '../hooks/pagesData';

const LinaroDdt = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <ThemeProvider theme={formtheme}>
      <CssBaseline />
      <Grid>
        <HeroCardName title_1={'Linaro DDT'} title_2={'Development Tools & Software'} />
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

          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: { xs: 2 },
              mb: 4,
              mt: 4,
              mx: 'auto',
              fontWeight: '600',
              fontSize: isMobile ? '1.25rem' : '1.5rem',
            }}
          >The Number One Debugger for C, C++ and Fortran Threaded and Parallel Code</Typography>
          <Grid
            container
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
            columnSpacing={{ xs: 1, sm: 2, md: 0 }}
          >
            <Grid
              item
              xs={6}
              sx={{
                mx: { xs: 'auto', md: '0' },
                maxWidth: { xs: '100%' }
              }}
            >
              <Box
                xs='auto'
                md={4}
                sx={{
                  backgroundColor: 'white',
                  mb: 1,
                  p: 1,
                  mt: 1,
                  pl: { xs: '2', md: '30%' },
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 2,
                    mt: 2,
                    mx: 'auto',
                    width: { s: '90%', md: '65%' },
                  }}
                >
                  {linaroDdtText}
                </Typography>
              </Box>
            </Grid>
            <DownloadContainer />
          </Grid>
          <Grid
            container
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
            columnSpacing={{ xs: 1, sm: 2, md: 0 }}
          >
            <Grid
              item
              xs={6}
              sx={{
                mx: { xs: 'auto', md: '0' },
                maxWidth: { xs: '100%' },
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 400, mx: { xs: 'auto', md: '0' }, maxWidth: { xs: '100%' }, }}
                image='/images/DDT_pic.jpg'
                alt="Ddt image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: 4, mx: { xs: 'auto', md: '0' }, maxWidth: { xs: '100%' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '600' }}>Linaro DDT Makes
                Debugging Faster</Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px' }}>
                {ddtFeatures.map((item) => (
                  <ListItem key={item} sx={{ display: 'list-item' }}>{item}</ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          <HeroText />
          <LinaroDdtFeatures />
          <TalkAndContact backColor={'white'} />
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider >
  )
}

export default LinaroDdt;