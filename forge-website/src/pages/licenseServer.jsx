import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar/index';
import LicenseServerTable from '../components/licenseServerTable/index';

const licenseServer = () => {
  return (
    <>
    <Navbar />
    <Container fixed>
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
        <Typography variant="h6"  sx={{}}>Linaro License Server</Typography>
        
        </Grid>
        <LicenseServerTable />
        </Container>
    </>
  )
}

export default licenseServer;