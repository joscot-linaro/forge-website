import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";
import OpenSourcesTable from '../components/OpenSourcesTable/index';
import DownloadHeroCard from '../components/HeroCard/DownloadHeroCard/index';
import HeaderBar from '../components/HeaderBar/index';

const OpenSource = () => {
    const [isExpanded,setIsExpanded]=useState(false);
  return (
    <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , }}>
      {/* <HeaderBar/> */}
    <DownloadHeroCard />
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
        <Grid sx={{display:'flex',fontSize:'1.25em',color:'#343a40',flexDirection:'row',borderRadius:0,width:'80%',}}>
        {isExpanded ?(
            <Button  onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowUpIcon/></Button>
        ):(
            <Button onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowDownIcon /></Button>
        )}
        <Typography variant="h6"  sx={{fontWeight:'600'}}>version: 22.1.3</Typography>
        </Grid>
        <OpenSourcesTable isExpanded={isExpanded} />
        </Grid>
        </Grid>
  )
}

export default OpenSource