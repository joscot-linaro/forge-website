import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";

interface TalkAndContactProps{
  backColor:string
}

const TalkAndContact:React.FC<TalkAndContactProps> = ({backColor}) => {
    const router = useRouter();
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,backgroundColor:backColor,}}>
        <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto',fontWeight:'600'}}>Talk with an Expert</Typography>
        <Typography variant="h6" noWrap sx={{mb:5,mx: 'auto'}}>Learn how Linaro Forge can accelerate your software development.</Typography>
           <Button onClick={()=>router.push("/contactUs")} sx={{color:'black',border:'2px solid #9bcc4c',width:150,borderRadius:4,mx:'auto',fontWeight:600,mb:2}}>Contact Us</Button>
        </Grid>
  )
}

export default TalkAndContact;