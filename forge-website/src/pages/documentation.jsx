import React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import DocumentationHeroCard from '../components/HeroCard/DocumentationHeroCard/index';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

const Documentation = () => {
  return (
    <>
        <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
    
    <Grid>
      {/* <HeaderBar/> */}
        <DocumentationHeroCard />
    <List style={{disply:'flex',flexDirection:'column',padding:'30px',fontFamily:'sans-serif'}}>
        <Typography variant="h6" sx={{mt:3,fontWeight:'600'}} >Technical specs</Typography>
        <Typography variant="h6" sx={{mt:8,fontWeight:'600',mb:7}}>User guide</Typography>
    </List>
    <Footer/>
    </Grid>
    </>
  )
}

export default Documentation;