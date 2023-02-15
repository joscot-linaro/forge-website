import React from 'react';
import DownloadHeroCard from '../src/components/HeroCard/DownloadHeroCard/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DownloadTable from '../src/components/DownloadTable/index';

const downloadForge = () => {
  return (
    <>
    <DownloadHeroCard/>
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'70%',mt:4,}}>
    <Typography variant="h5" noWrap sx={{mt:2,}}>Download Arm Forge 22.1.3</Typography>
    <Typography variant="body1" noWrap sx={{mt:2,}}>Arm Forge includes a graphical debugger, parallel profiler, and an application performance reports tool.</Typography>
    <Typography variant="body1" noWrap sx={{mt:2,}}>Download the packages you require for your operating system and architecture.</Typography>
    <Typography variant="h5" noWrap sx={{mt:2,}}>Download</Typography>
    <Typography variant="body1" sx={{mt:2,}}>Windows and macOS builds are remote clients only. They allow you to connect to a remote system and debug or profile. The
     remote clients cannot debug or profile programs on Windows and macOS. Linux downloads also function as remote clients.</Typography>
     <DownloadTable/>
    </Grid>
    </>
  )
}

export default downloadForge;