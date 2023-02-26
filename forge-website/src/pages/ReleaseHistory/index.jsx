import React,{useEffect, useState} from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {getSortedPostsData} from '../../lib/releaseHistory';
import CollapseList from '../../components/CollapseList/index';
import Navbar from '../../components/Navbar/index';
import Footer from '../../components/Footer';

export async function getStaticProps() {
  const allPostsData =await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    
  };
}

 function ReleaseHistory({allPostsData}) {
     const [open,setOpen]=useState(false);

  return (
    <>
    <Navbar/>
       <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:6,mx:'auto'}}>
         <Typography variant="h5" sx={{mt:7,fontWeight:'600',p:2}}>Linaro Forge Release History</Typography>
         <Typography variant="subtitle2" sx={{mb:2,mt:2,pl:2}}>This page describes the changes between releases of Linaro Forge.</Typography>
         <Typography variant="subtitle2" sx={{mb:2,pl:2}}>To download and install the latest version of Linaro Forge, see our <Typography variant="body1" component='a'  sx={{mt:2,textDecoration:'none'}} href='/downloadForge'><span style={{color:'#23b1da',textDecoration:'none !important'}}>downloads page</span></Typography>.</Typography>
         </Grid>
      <List sx={{mt:1}} >
      {allPostsData.map((item,index)=>(
          (item===allPostsData[0])?
          <CollapseList key={index} item={item} open={true} />:
        <CollapseList key={index} item={item} open={false} />
      
    ))}
    </List>
    <Footer/>
   </>
  )
}

export default ReleaseHistory;