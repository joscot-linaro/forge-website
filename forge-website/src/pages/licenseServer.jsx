import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DownloadHeroCard from '../components/HeroCard/DownloadHeroCard/index';
import LicenseServerTable from '../components/licenseServerTable/index';
import Footer from '../components/Footer/index';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from "next/router";
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const LicenseServer = () => {
  const router = useRouter();
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

        <DownloadHeroCard />
        <Grid sx={{ mt: 2, minHeight: { md: '70.5vh', xs: '100vh' } }}>
          <Grid sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, borderColor: 'white', ml: 6, width: '100%', mt: 4, mx: 'auto', }}>
            <Typography variant="h5" sx={{ mt: 2, mb: 3, fontWeight: '600', pl: 3 }}>Linaro License Server</Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 3, fontWeight: '600', pl: 3 }}>Download Linaro Licence Server</Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 3, fontWeight: '400', pl: 3 }}>Use the table below to download the latest version of Linaro Licence Server for your server and HPC toolchain.</Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 3, fontWeight: '400', pl: 3 }}>For more information, see <Typography sx={{ textDecoration: 'none', color: '#2596be' }} component='a' href='https://docs.linaroforge.com/latest/html/101169_arm-licence-server-user-guide/use_arm_licence_server/index.html'>Use Linaro Licence Server</Typography>.</Typography>
          </Grid>
          <LicenseServerTable />
          <Button onClick={() => router.push('/LicenceServerReleasehistory')} sx={{ color: 'white', background: '#23b1da', m: 2, borderRadius: 3, '&:hover': { color: '#23b1da' } }}>Release history</Button>
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default LicenseServer;