import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/licenseReleaseHistory';
import List from '@mui/material/List';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';
import CollapseList from '../components/CollapseList/index';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },

  };
}

const LicenceServerReleasehistory = ({ allPostsData }) => {
  const [isExpanded, setIsExpanded] = useState(true);
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
      <Navbar />
      <Grid>
        <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:6,mx:'auto',minHeight:{md:'91vh',xs:'100vh'}}}>
          <Typography variant="h5" sx={{mt:7,fontWeight:'600',p:2}}>Linaro Licence Server Release History</Typography>
          <Typography variant="subtitle2" sx={{mb:2,mt:2,pl:2}}>This page describes the changes between releases of the Linaro Licence Server.</Typography>
          <Typography variant="subtitle2" sx={{mb:2,pl:2}}>To download and install the latest version of the Linaro Licence Server, see our <Typography variant="body1" component='a'  sx={{mt:2,textDecoration:'none'}} href='/licenseServer'><span style={{color:'#23b1da',textDecoration:'none !important'}}>downloads page</span></Typography>.</Typography>
          <Grid container rowSpacing={1} sx={{ flexDirection: 'column', p: 3, }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          </Grid>
                <List sx={{mt:1}} >
                {allPostsData.map((item,index)=>(
                    (item===allPostsData[0])?
                    <CollapseList key={index} item={item} open={true} />:
                  <CollapseList key={index} item={item} open={false} />
                
                ))}
                </List>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}
export default LicenceServerReleasehistory;