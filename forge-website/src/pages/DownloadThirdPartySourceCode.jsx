import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';
import OpenSourcesTable from '../components/OpenSourcesTable/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const OpenSource = () => {
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
      <Grid flexGrow={2} sx={{
        backgroundColor: 'white',
        boxSizing: 'border-box', m: 0, p: 0, width: { xs: 'min-content', md: '100%', sm: '100%' }
        ,
      }}>
        {/* <HeaderBar/> */}
        <Navbar />
        <Grid sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, borderColor: 'white', ml: 6, width: '100%', mt: 6, mx: 'auto', minHeight: { md: '91vh' } }}>
          <Grid sx={{ display: 'flex', fontSize: '1.25em', color: '#343a40', flexDirection: 'row', borderRadius: 0, width: '80%', mt: 5, mb: 3 }}>
            {/* {isExpanded ?(
            <Button  onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowUpIcon/></Button>
        ):(
            <Button onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowDownIcon /></Button>
        )} */}

            <Typography variant="h6" sx={{ fontWeight: '600', pl: 10 }}>version: 22.1.3</Typography>
          </Grid>
          <OpenSourcesTable />
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default OpenSource