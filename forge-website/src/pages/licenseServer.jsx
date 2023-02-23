import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DownloadHeroCard from '../components/HeroCard/DownloadHeroCard/index';
import LicenseServerTable from '../components/licenseServerTable/index';
import Footer from '../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider,createTheme } from '@mui/material/styles';


const LicenseServer = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  return (
    <ThemeProvider theme={formtheme}>
       <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
      <Grid>
    {/* <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , }}> */}
    <DownloadHeroCard/>
    <Grid sx={{ mt:2,}}>
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
        <Typography variant="h6"  sx={{mt:2,mb:3,mx:'auto',fontWeight:'600'}}>Linaro License Server</Typography>
        
        </Grid>
        <LicenseServerTable />
        </Grid>
        <Footer/>
    </Grid>
    </ThemeProvider>
  )
}

export default LicenseServer;