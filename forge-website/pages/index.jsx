import React from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar/index';
import HeroCard from '../src/components/HeroCard/HomeHeroCard/index';
import ForgeNeed from '../src/components/ForgeNeed';
import ForgePlatforms from '../src/components/ForgePlatforms/index';
import Container from '@mui/material/Container';
import { getSortedPostsData } from "../src/lib/platforms";
import Grid from '@mui/material/Grid';
import HeaderText from '../src/components/HeaderText/index';
import ForgeFeatures from '../src/components/ForgeFeatures/index';
import ForgeEditions from '../src/components/ForgeEditions/index';
import TalkAndContact from '../src/components/TalkAndContact/index';
// import { useThemeContext } from '@linaro-marketing/linaro-mui-web';

// interface allPlatformsDataProps{
// 	id:string,
// 	platName:string,
// 	title:string,
// 	description:string,
// }

export async function getStaticProps() {
    const allPlatformsData =await getSortedPostsData();
    console.log('data is :',allPlatformsData);
    return {
      props: {
        allPlatformsData,
      },
      
    };
  }

export default function Home({allPlatformsData}) {
  const [spacing, setSpacing] = React.useState(2);
 
  return (
    <>
      {/* <Head>
        <title>Forge Website</title>
        
      </Head> */}
	  {/* <Container sx={{width:'100%'}}> */}
	  <Navbar />
    <HeroCard />
		<ForgeNeed/>
    <HeaderText />
    <Grid container  spacing={2}  >
            <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
    {allPlatformsData.map(({ id,platName, title,description,bordercolor,backcolor,icon},index)=>(
      <ForgePlatforms id={id} platName={platName} title={title} description={description} bordercolor={bordercolor} backcolor={backcolor} icon={icon} />
    ))}
		 </Grid>
                </Grid>
                </Grid>
		{/* </Container> */}
    <ForgeFeatures />
    <ForgeEditions />
   <TalkAndContact/>
    </>
  )
}
