import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";
import OpenSourcesTable from '../components/OpenSourcesTable/index';
import DownloadHeroCard from '../components/HeroCard/DownloadHeroCard/index';
import Footer from '../components/Footer/footerProps/index';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

const OpenSource = () => {
    const [isExpanded,setIsExpanded]=useState(false);
  return (
    <>
      <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
      <CssBaseline />
    <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , }}>
      {/* <HeaderBar/> */}
    <DownloadHeroCard />
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:6,mx:'auto'}}>
        <Grid sx={{display:'flex',fontSize:'1.25em',color:'#343a40',flexDirection:'row',borderRadius:0,width:'80%',mt:5,mb:3}}>
        {isExpanded ?(
            <Button  onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowUpIcon/></Button>
        ):(
            <Button onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowDownIcon /></Button>
        )}
        
        <Typography variant="h6"  sx={{fontWeight:'600',}}>version: 22.1.3</Typography>
        </Grid>
        <OpenSourcesTable isExpanded={isExpanded} />
        </Grid>
        </Grid>
        </>
  )
}

export default OpenSource