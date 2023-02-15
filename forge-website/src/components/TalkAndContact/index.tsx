import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";

const TalkAndContact = () => {
    const router = useRouter();
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,backgroundColor:'white',mt:2}}>
        <Typography variant="h5" noWrap sx={{mb:5,mt:2,mx: 'auto'}}>Talk with an Expert</Typography>
        <Typography variant="h6" noWrap sx={{mb:5,mx: 'auto'}}>Learn how Arm Forge can accelerate your software development.</Typography>
           <Button onClick={()=>router.push("/contact")} sx={{color:'black',border:'2px solid #9bcc4c',width:150,borderRadius:4,mx:'auto',fontWeight:600}}>Contact Us</Button>
        </Grid>
  )
}

export default TalkAndContact;