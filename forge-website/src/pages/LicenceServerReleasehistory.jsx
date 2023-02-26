import React from 'react';
import Grid from '@mui/material/Grid';
import DownloadHeroCard from '../components/HeroCard/DownloadHeroCard/index';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import {getSortedPostsData} from '../lib/licenseReleaseHistory';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {marked} from 'marked';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPostsData =await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    
  };
}

const LicenceServerReleasehistory = ({allPostsData}) => {
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
      <Navbar/>
    <Grid>
    {/* <DownloadHeroCard/> */}
    <Grid sx={{ width: '100%',mt:2,}}>
    <Grid container rowSpacing={1} sx={{flexDirection:'column',p:3}} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
    {/* <Typography variant="h5"  sx={{mt:2,fontWeight:'600',p:2}}>Release history</Typography> */}
    </Grid>
    <Grid sx={{pl:4}}>
   {allPostsData.map((item,index)=>(
        <div key={index} dangerouslySetInnerHTML={{ __html: marked(item.content) }} />
       ))}
       </Grid>
       </Grid>
      </Grid>
      <Footer/>
      </ThemeProvider>
  )
}
export default LicenceServerReleasehistory;