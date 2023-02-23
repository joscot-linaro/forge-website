import React from 'react';
import DownloadHeroCard from '../../components/HeroCard/DownloadHeroCard/index';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DownloadTable from '../../components/DownloadTable/index';
import Button from "@mui/material/Button";
import InstallForge from '../../components/installForge/index';
import ArmForgeToolsLinks from '../../components/ArmForgeToolsLinks/index';
import TalkAndContact from '../../components/TalkAndContact/index';
import { useRouter } from "next/router";
import HeaderBar from '../../components/HeaderBar/index';

const DownloadForge = () => {
  const buttonTitles=[{name:'Older versions of Linaro Forge',to:'/downloadForge_OldVersion'},{name:'Linaro License Server',to:'/licenseServer'},{name:'See Source code',to:'/openSource'},{name:'Supported platforms',to:'/'},{name:'User guide',to:'https://docs.linaroforge.com'}];
  const router = useRouter();
  
  return (
    <Grid flexGrow={2} sx={{backgroundColor:'white',
    boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    , }}>
      {/* <HeaderBar/> */}
    <DownloadHeroCard/>
    <Grid sx={{ width: '100%',mt:2,}}>
    
    <Grid container rowSpacing={1} sx={{flexDirection:'column',p:3}} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
    <Typography variant="h5"  sx={{mt:2,fontWeight:'600'}}>Download Arm Forge 22.1.3</Typography>
    <Typography variant="body1"  sx={{mt:2,}}>Arm Forge includes a graphical debugger, parallel profiler, and an application performance reports tool.</Typography>
    <Typography variant="body1"  sx={{mt:2,}}>Download the packages you require for your operating system and architecture.</Typography>
    <Typography variant="h5"  sx={{mt:2,fontWeight:'600'}}>Download</Typography>
    <Typography variant="body1" sx={{mt:2,}}>Windows and macOS builds are remote clients only. They allow you to connect to a remote system and debug or profile. The
     remote clients cannot debug or profile programs on Windows and macOS. Linux downloads also function as remote clients.</Typography>
     </Grid>
     <DownloadTable />
     <Grid sx={{display:'flex',flexDirection:'row',justifyContent:'center',mx:'auto'}}>
     {buttonTitles.map((item)=>(
      <Button key={item.name} onClick={()=>router.push(item.to)} sx={{color:'white',background:'#23b1da',m:2,borderRadius:3,'&:hover':{color:'#23b1da'}}}>{item.name}</Button>
     ))}
    </Grid>
    <InstallForge/>
    <ArmForgeToolsLinks/>
    </Grid>
    <TalkAndContact backColor={'#e6e6e6'} />
    </Grid>
  )
}

export default DownloadForge;