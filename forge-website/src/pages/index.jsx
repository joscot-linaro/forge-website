import React from 'react';
import HeroCard from '../components/HeroCard/HomeHeroCard/index';
import ForgeNeed from '../components/ForgeNeed';
import ForgePlatforms from '../components/ForgePlatforms/index';
import { getSortedPostsData } from "../lib/platforms";
import Grid from '@mui/material/Grid';
import HeaderText from '../components/HeaderText/index';
import ForgeFeatures from '../components/ForgeFeatures/index';
import ForgeEditions from '../components/ForgeEditions/index';
import TalkAndContact from '../components/TalkAndContact/index';
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
    <Grid flexGrow={2} sx={{backgroundColor:'white',boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' } }} >
      {/* <Head>
        <title>Forge Website</title>
        
      </Head> */}
	  {/* <Container sx={{width:'100%'}}> */}
	  {/* <Navbar /> */}
    <HeroCard />
		<ForgeNeed/>
    <HeaderText />
    <Grid container  spacing={2}  >
      <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={spacing}>
      {allPlatformsData.map(({ id,platName,link, title,description,bordercolor,backcolor,icon},index)=>(
      <ForgePlatforms key={id} link={link} platName={platName} title={title} description={description} bordercolor={bordercolor} backcolor={backcolor} icon={icon} />
    ))}
		 </Grid>
      </Grid>
      </Grid>
		{/* </Container> */}
    <ForgeFeatures />
    <ForgeEditions />
   <TalkAndContact/>
    </Grid>
  )
}
