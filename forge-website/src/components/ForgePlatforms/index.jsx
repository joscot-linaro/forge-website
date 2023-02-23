import React,{ useRef} from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/router";



const ForgePlatforms = ({id,platName,link, title,description,bordercolor,backcolor,icon }) => {
  const colorRef = useRef();
  const router = useRouter();

  return (
    <div key={id}>
    <Card   
     ref={colorRef}
			sx={{
				 backgroundColor: backcolor,
         border:`2px solid`,
         borderColor:bordercolor,
				 m:4,
				 width: '250px',
          height:'350px',
			}}>
        <CardMedia
                component="img"
                sx={{width:60,mx:'auto',mt:3}}
                image={icon}
                alt="Live from space album cover"
        />
        <CardContent sx={{color:'black', display:'flex',justifyContent:'center',
          flexDirection:'column'}}>
        <Typography variant="body1" sx={{mx:'auto',fontWeight:'700',fontSize:'12px',mt:2}} noWrap>{platName}</Typography>
        <Typography noWrap variant="subtitle1" display="block" sx={{mx:'auto',fontWeight:'bold',fontSize:'15px',p:.5,display:'flex',justifyContent:'center'}}>{title}</Typography>
        <Typography variant="body2" display="block" sx={{mx:'auto',fontSize:'14px'}} >{description}</Typography>
    
        </CardContent>
        <Button onClick={()=>router.push(link)} ref={colorRef}  sx={{fontSize:'12px',mx:'auto',display:'flex',justifyContent:'center',border:'2px solid',borderColor:bordercolor,borderRadius:3,color:'black',mb:2,fontWeight:'600',mt:2,pt:1}} >Learn more</Button>
   
    </Card> 
    </div>
  )
}

export default ForgePlatforms;