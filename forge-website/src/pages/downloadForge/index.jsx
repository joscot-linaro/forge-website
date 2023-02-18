import React, { useEffect, useState } from 'react';
import DownloadHeroCard from '../../components/HeroCard/DownloadHeroCard/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DownloadTable from '../../components/DownloadTable/index';
import Button from "@mui/material/Button";
import InstallForge from '../../components/installForge/index';
import Container from '@mui/material/Container';
import ArmForgeToolsLinks from '../../components/ArmForgeToolsLinks/index';
import TalkAndContact from '../../components/TalkAndContact/index';
import { useRouter } from "next/router";

const downloadForge = () => {
  const buttonTitles=[{name:'Older versions of Linaro Forge',to:'/downloadForge_OldVersion'},{name:'Linaro License Server',to:'/licenseServer'},{name:'See Source code',to:'/openSource'},{name:'Supported platforms',to:'/'},{name:'User guide',to:'https://docs.linaroforge.com'}];
  const router = useRouter();
  
  return (
    <>
    <DownloadHeroCard/>
    <Container fixed>
    
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
    <Typography variant="h5" noWrap sx={{mt:2,}}>Download Arm Forge 22.1.3</Typography>
    <Typography variant="body1" noWrap sx={{mt:2,}}>Arm Forge includes a graphical debugger, parallel profiler, and an application performance reports tool.</Typography>
    <Typography variant="body1" noWrap sx={{mt:2,}}>Download the packages you require for your operating system and architecture.</Typography>
    <Typography variant="h5" noWrap sx={{mt:2,}}>Download</Typography>
    <Typography variant="body1" sx={{mt:2,}}>Windows and macOS builds are remote clients only. They allow you to connect to a remote system and debug or profile. The
     remote clients cannot debug or profile programs on Windows and macOS. Linux downloads also function as remote clients.</Typography>
     </Grid>
     <DownloadTable />
     <div style={{display:'flex',flexDirection:'row',justifyContent:'left',}}>
     {buttonTitles.map((item)=>(
      <Button onClick={()=>router.push(item.to)} sx={{color:'white',backgroundColor:'#23b1da',m:2,borderRadius:3}}>{item.name}</Button>
     ))}
    </div>
    <InstallForge/>
    <ArmForgeToolsLinks/>
    </Container>
    <TalkAndContact backColor={'#e6e6e6'} />
    </>
  )
}

export default downloadForge;