import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import HeroCard from '../components/HeroCard/HeroCard/index';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Documentation = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
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
        {/* <HeaderBar/> */}
        <HeroCard myTitle={'Documentation'} />
        <List sx={{ listStyleType: 'disc', padding: '30px', minHeight: '68vh', mt: 8, marginLeft: '40px' }}>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography sx={{ textDecoration: 'none', color: 'black' }} variant='h5'>Forge user guide</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
              <Typography sx={{ textDecoration: 'none', color: '#2596be' }} variant='h6' component='a' href='https://docs.linaroforge.com/latest/html/101136_arm-forge-user-guide/index.html'>HTML</Typography>
              <Typography sx={{ textDecoration: 'none', color: '#2596be' }} variant='h6' component='a' href='https://docs.linaroforge.com/latest/userguide-forge.pdf'>PDF</Typography>
            </Grid>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography sx={{ textDecoration: 'none', color: 'black' }} variant='h5'>License server user guide</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
              <Typography sx={{ textDecoration: 'none', color: '#2596be' }} variant='h6' component='a' href='https://docs.linaroforge.com/latest/html/101169_arm-licence-server-user-guide/index.html'>HTML</Typography>
              <Typography sx={{ textDecoration: 'none', color: '#2596be' }} variant='h6' component='a' href='https://docs.linaroforge.com/latest/userguide-licenceserver.pdf'>PDF</Typography>
            </Grid>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography sx={{ textDecoration: 'none', color: 'black' }} variant='h5'>MAP metric plugin interface</Typography>
            <Typography sx={{ textDecoration: 'none', color: '#2596be', mt: 4 }} variant='h6' component='a' href='https://docs.linaroforge.com/latest/html/101532_arm-map-metric-plugin-interface/index.html'>HTML</Typography>
          </ListItem>

        </List>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default Documentation;