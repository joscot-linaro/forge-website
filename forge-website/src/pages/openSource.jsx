import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from '../components/Navbar/index';
import Button from "@mui/material/Button";
import OpenSourcesTable from '../components/OpenSourcesTable/index';

const openSource = () => {
    const [isExpanded,setIsExpanded]=useState(false);
  return (
    <>
    <Navbar />
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
        <Grid sx={{display:'flex',fontSize:'1.25em',color:'#343a40',flexDirection:'row',borderRadius:0,width:'80%',}}>
        {isExpanded ?(
            <Button  onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowUpIcon/></Button>
        ):(
            <Button onClick={()=>setIsExpanded(!isExpanded)} style={{}}><KeyboardArrowDownIcon /></Button>
        )}
        <Typography variant="h6"  sx={{}}>version: 22.1.3</Typography>
        </Grid>
        <OpenSourcesTable isExpanded={isExpanded} />
        </Grid>
        </>
  )
}

export default openSource