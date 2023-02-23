import React from 'react';
import HeroCard from '../components/HeroCard/HomeHeroCard/index';
import ForgeNeed from '../components/ForgeNeed/index';
import ForgePlatforms from '../components/ForgePlatforms/index';
import Grid from '@mui/material/Grid';
import HeaderText from '../components/HeaderText/index';
import ForgeFeatures from '../components/ForgeFeatures/index';
import ForgeEditions from '../components/ForgeEditions/index';
import TalkAndContact from '../components/TalkAndContact/index';
import PlatformsData from '../../content/JsonFiles/ForgePlatforms.json';
import Footer from '../components/Footer/index';
import Head from 'next/head';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function Home() {
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
    <Grid>
    {/* <Grid flexGrow={0} sx={{backgroundColor:'white',boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' },border:'2px solid red' }} > */}
    <HeroCard />
		<ForgeNeed/>
    <HeaderText />
    <Grid container  spacing={2}  >
      <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
      {PlatformsData.map(({width,platName,link, title,description,bordercolor,backcolor,icon},index)=>(
      <ForgePlatforms key={index} link={link} platName={platName} title={title} description={description} bordercolor={bordercolor} backcolor={backcolor} icon={icon} width={width} />
    ))}
		 </Grid>
      </Grid>
      </Grid>
    <ForgeFeatures />
    <ForgeEditions />
   <TalkAndContact/>
   <Footer />
    </Grid>
    
    </ThemeProvider>
  )
}
