import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';

const ForgeNeed = () => {
  const router = useRouter();
  return (
    <>
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

      <Grid sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, borderColor: 'white', mt: 2, mb: 8, mx: 'auto', }}>
        <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 4, mx: 'auto', fontWeight: '600' }}>Everything you need</Typography>
        <Grid container rowSpacing={1} sx={{ mx: 'auto', flexDirection: { xs: 'column', md: 'row' } }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
            <Box xs='auto' md={4} sx={{
              backgroundColor: 'white', mb: 1, p: 1, mt: 2, width: '100%', pl: { xs: '2', md: '37%' }, display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Typography variant="subtitle2" sx={{ mb: 2, mt: 2.5, mx: 'auto' }}>
                Build reliable and optimized code for the right results on
                multiple Server and HPC architectures, from the latest
                compilers and C++ standards to Intel, 64-bit Arm, AMD,
                OpenPOWER and Nvidia GPU hardware. Linaro Forge
                combines Linaro DDT, the leading debugger for time-saving
                high performance application debugging, Linaro MAP, the
                trusted performance profiler for invaluable optimization advice
                across native and Python HPC codes, and Linaro Performance
                Reports for advanced reporting capabilities. Linaro DDT and
                Linaro MAP are also available as standalone products.
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

        </Grid>
      </Grid>
    </>
  )
}

export default ForgeNeed;