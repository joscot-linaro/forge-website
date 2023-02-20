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
  console.log(link)
  return (
    <div key={id}>
    <Card   
     ref={colorRef}
			sx={{
				// maxWidth: 345,
				 backgroundColor: backcolor,
         border:`2px solid`,
         borderColor:bordercolor,
				 m:4,
				 width: '250px',
        //  height:'350px',
			}}>
        <CardMedia
                component="img"
                sx={{width:50,mx:'auto',mt:2}}
                //  sx={{filter:"brightness(30%)" }}
                image={icon}
                alt="Live from space album cover"
        />
        <CardContent sx={{color:'black', display:'flex',justifyContent:'center',
          flexDirection:'column'}}>
        <Typography variant="body1" sx={{mx:'auto',fontWeight:'700',fontSize:'12px'}} noWrap>{platName}</Typography>
        <Typography variant="subtitle1" display="block" sx={{mx:'auto',fontWeight:'bold',fontSize:'17px',p:.5,display:'flex',justifyContent:'center'}}>{title}</Typography>
        <Typography variant="body2" display="block" sx={{mx:'auto',fontSize:'14px'}} >{description}</Typography>
    
        </CardContent>
        <Button onClick={()=>router.push(link)} ref={colorRef}  sx={{fontSize:'12px',mx:'auto',display:'flex',justifyContent:'center',border:'2px solid',borderColor:bordercolor,borderRadius:3,color:'black',mb:2,fontWeight:'600',mt:2}} >Learn more</Button>
   
    </Card> 
    </div>
  )
}

export default ForgePlatforms;